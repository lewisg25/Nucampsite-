// Import the PARTNERS array from the shared folder
import { PARTNERS } from "../../app/shared/PARTNERS.js";

// Export a const named selectAllPartners
// Set the value for this to an arrow function that returns the entire PARTNERS array
export const selectAllPartners = () => {
  return PARTNERS;
};

// Export a const named selectFeaturedPartner
// Set the value for this to an arrow function that finds the first partner with a truthy featured property from the PARTNERS array
export const selectFeaturedPartner = () => {
  // Use the find method to get the first element that satisfies the condition
  return PARTNERS.find((partner) => partner.featured);
};
