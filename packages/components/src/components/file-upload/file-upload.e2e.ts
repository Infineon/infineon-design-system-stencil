import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { IfxFileUpload } from './file-upload';

describe('ifx-file-upload', () => {
  let page: SpecPage;
  let input: HTMLInputElement;

  const createTestPage = async (html = `<ifx-file-upload></ifx-file-upload>`) => {
    page = await newSpecPage({
      components: [IfxFileUpload],
      html,
    });
    input = page.root.shadowRoot.querySelector('input[type="file"]');
  };

  const addFilesViaInput = async (files: File[]) => {
    Object.defineProperty(input, 'files', { value: files });
    input.dispatchEvent(new Event('change'));
    await page.waitForChanges();
  };

  it('should render the component', async () => {
    await createTestPage();
    expect(page.root).toBeDefined();
    expect(page.root.tagName).toBe('IFX-FILE-UPLOAD');
  });

  it('should add a file and display it in the file list', async () => {
    await createTestPage();
    const testFile = new File(['dummy content'], 'my-document.pdf', { type: 'application/pdf' });

    await addFilesViaInput([testFile]);

    const base = page.root.shadowRoot.querySelector('.file-name-base');
    const ext = page.root.shadowRoot.querySelector('.file-name-ext');

    expect(base?.textContent).toBe('my-document');
    expect(ext?.textContent).toBe('.pdf');
  });

  it('should remove the file when the ifx-icon-button is clicked', async () => {
    await createTestPage();
    const testFile = new File(['dummy content'], 'delete-me.txt', { type: 'text/plain' });

    await addFilesViaInput([testFile]);

    const removeButton = page.root.shadowRoot.querySelector('.file-actions ifx-icon-button');
    removeButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    const items = page.root.shadowRoot.querySelectorAll('.file-name-wrapper');
    expect(items.length).toBe(0);
  });

  it('should add file via drag and drop', async () => {
    await createTestPage(`<ifx-file-upload drag-and-drop></ifx-file-upload>`);

    const dropzone = page.root.shadowRoot.querySelector('.upload-dropzone');
    expect(dropzone).not.toBeNull();

    const testFile = new File(['drag content'], 'dragged.pdf', { type: 'application/pdf' });

    const mockDataTransfer = {
      files: [testFile],
      types: ['Files'],
      items: [
        {
          kind: 'file',
          type: testFile.type,
          getAsFile: () => testFile,
        },
      ],
    };

    const dropEvent = new Event('drop', { bubbles: true, cancelable: true });
    Object.defineProperty(dropEvent, 'dataTransfer', { value: mockDataTransfer });

    dropzone.dispatchEvent(dropEvent);
    await page.waitForChanges();

    const base = page.root.shadowRoot.querySelector('.file-name-base');
    const ext = page.root.shadowRoot.querySelector('.file-name-ext');

    expect(base?.textContent).toBe('dragged');
    expect(ext?.textContent).toBe('.pdf');
  });

  it('should handle multiple file uploads by default', async () => {
    await createTestPage();
    const file1 = new File(['123'], 'one.txt', { type: 'text/plain' });
    const file2 = new File(['456'], 'two.png', { type: 'image/png' });

    await addFilesViaInput([file1, file2]);

    const baseNames = Array.from(page.root.shadowRoot.querySelectorAll('.file-name-base')).map((el: Element) => el.textContent?.trim());

    expect(baseNames).toEqual(expect.arrayContaining(['one', 'two']));
    expect(baseNames.length).toBe(2);
  });

  it('should not accept file with invalid type', async () => {
    await createTestPage(`<ifx-file-upload allowed-file-types="jpg,jpeg,png"></ifx-file-upload>`);

    const invalidFile = new File(['wrong'], 'data.exe', { type: 'application/x-msdownload' });
    await addFilesViaInput([invalidFile]);

    const failedItem = page.root.shadowRoot.querySelector('.file-item.upload-failed');
    expect(failedItem).not.toBeNull();
  });

  it('should not accept file exceeding max file size', async () => {
    await createTestPage(`<ifx-file-upload max-file-size-m-b="0.3"></ifx-file-upload>`); // 300 bytes

    const bigFile = new File(['a'.repeat(500)], 'big.txt', { type: 'text/plain' });
    await addFilesViaInput([bigFile]);

    const failedItem = page.root.shadowRoot.querySelector('.file-item.upload-failed');
    expect(failedItem).not.toBeNull();
  });
});
