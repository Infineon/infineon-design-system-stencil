import { getCompliancePercentageOfComponent, getMaxRating } from '../utils/accessibility.ts';

export const AccessibilityPage = ({ 
  stories, 
  componentName, 
  data, 
  customNotes 
}) => {
  const compliancePercentage = getCompliancePercentageOfComponent(data);
  const componentRating = getMaxRating(compliancePercentage);
  const statusIcons = {
    'Passing': '✅',
    'Failing': '❌',
    'Not Applicable': '⚪'
  };

  return (
    <>     
      <h1>Accessibility of {componentName}</h1>
      
      <p>Overall this component has a rating of <strong>{componentRating}</strong>.</p>
      
      <h2>Compliance Percentage</h2>
      <p>The table below shows the percentage of accessibility rules that are fulfilled for each level (A, AA, AAA).</p>
      
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>{(compliancePercentage.A * 100).toFixed(0)}%</td>
          </tr>
          <tr>
            <td>AA</td>
            <td>{(compliancePercentage.AA * 100).toFixed(0)}%</td>
          </tr>
          <tr>
            <td>AAA</td>
            <td>{(compliancePercentage.AAA * 100).toFixed(0)}%</td>
          </tr>
        </tbody>
      </table>
      
      <h2>WCAG Rules</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Guideline</th>
            <th>Level</th>
            <th>Summary</th>
            <th>Status</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rule, index) => (
            <tr key={index}>
              <td>{rule.guidelineNumber}</td>
              <td>{rule.guideline}</td>
              <td>{rule.level}</td>
              <td>{rule.summary}</td>
              <td>{statusIcons[rule.status] || rule.status}</td>
              <td>{rule.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {customNotes && (
        <>
          <h2>Notes on Usage</h2>
          <div dangerouslySetInnerHTML={{ __html: customNotes }} />
        </>
      )}
    </>
  );
};