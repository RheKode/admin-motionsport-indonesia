import { twMerge } from 'tailwind-merge';

type ClassNameValue = ClassNameArray | string | null | undefined | 0 | false;
type ClassNameArray = ClassNameValue[];
export const cn = (...classLists: ClassNameValue[]) => {
	return twMerge(classLists);
};
