// Single source of truth for the years of experience shown on the site.
// The site is static, so the value is computed at build time; a yearly
// scheduled workflow triggers a rebuild so the number stays current.
export const CAREER_START_YEAR = 2022;

export const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;
