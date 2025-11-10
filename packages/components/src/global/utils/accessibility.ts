export type AccessibilityGuideline  = {
  guidelineNumber: string;
  guideline: string;
  level: 'A' | 'AA' | 'AAA';
  summary: string;
  status: 'Passing' | 'Failing' | 'Not Applicable' | string;
  comment: string;
}

export type AccessibilityGuidelines = AccessibilityGuideline[];

export type CompliancePercentage = {
  A: number;
  AA: number;
  AAA: number;
}


export function getCompliancePercentageOfComponent(guidelines: AccessibilityGuidelines): CompliancePercentage {
  let compliantCount = {
    A: 0,
    AA: 0,
    AAA: 0
  }

  guidelines.forEach((guideline) => {
    compliantCount[guideline.level] += guideline.status === 'Passing' || guideline.status === 'Not Applicable' ? 1 : 0;
  });

  let percentage = {
    A: compliantCount.A / guidelines.filter(g => g.level === 'A').length,
    AA: compliantCount.AA / guidelines.filter(g => g.level === 'AA').length,
    AAA: compliantCount.AAA / guidelines.filter(g => g.level === 'AAA').length
  }

  return percentage;
}

export function getMaxRating(percentage: CompliancePercentage): 'A' | 'AA' | 'AAA' | 'F' {

  if (percentage.AAA === 1) {
    return 'AAA';
  }

  if (percentage.AA === 1) {
    return 'AA';
  }

  if (percentage.A === 1) {
    return 'A';
  }

  return 'F';
}