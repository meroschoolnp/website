export interface TcoDefaults {
  students: number;
  monthlyPerStudentFee: number;
  years: number;
  annualSmsAndServerAddons: number;
  meroschoolPerpetualCost: number;
}

export const TCO_DEFAULTS: TcoDefaults = {
  students: 650,
  monthlyPerStudentFee: 45,
  years: 5,
  annualSmsAndServerAddons: 18000,
  meroschoolPerpetualCost: 65000,
};

export function calculateTcoMetrics(
  students: number,
  monthlyPerStudentFee: number,
  years: number,
  annualAddons: number = TCO_DEFAULTS.annualSmsAndServerAddons,
  perpetualCost: number = TCO_DEFAULTS.meroschoolPerpetualCost
) {
  const annualCloudCost = students * monthlyPerStudentFee * 12;
  const totalAnnualCloud = annualCloudCost + annualAddons;
  const totalCloudCost = totalAnnualCloud * years;
  const estimatedSavings = Math.max(0, totalCloudCost - perpetualCost);

  return {
    annualCloudCost: totalAnnualCloud,
    totalCloudCost,
    meroschoolPerpetualCost: perpetualCost,
    estimatedSavings,
  };
}
