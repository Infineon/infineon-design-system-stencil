import { readTextFile } from "../file-system.js";

export const readFileAndSkipBinary = async (filePath: string): Promise<string | null> => {
	try {
		return await readTextFile(filePath);
	} catch {
		return null;
	}
};