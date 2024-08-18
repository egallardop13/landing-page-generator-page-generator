export const heroComponents = [];
export const ctaComponents = [];
export const featureComponents = [];
export const footerComponents = [];
export const logoCloudComponents = [];
export const statsComponents = [];

// export const navbarComponents = []

export const dynamicallyImportComponents = async (
  folderPath,
  componentArray
) => {
  let idx = 1;
  while (true) {
    try {
      const component = await import(`../components/${folderPath}${idx}`);
      componentArray.push(component.default);
      idx++;
    } catch (e) {
      console.warn(
        `No more components found for ${folderPath}. Stopping at index ${idx}.`
      );
      break;
    }
  }
};

let isSeeding = false;
export async function seedComponents() {
  if (isSeeding) {
    console.warn("Already seeding components. Skipping...");
    return;
  }
  isSeeding = true;
  console.log("Seeding components...");
  try {
    await dynamicallyImportComponents("heroSections/Hero", heroComponents);
    await dynamicallyImportComponents("ctaSections/CtaSection", ctaComponents);
    await dynamicallyImportComponents(
      "featureSections/FeatureSection",
      featureComponents
    );
    await dynamicallyImportComponents("footers/Footer", footerComponents);
    await dynamicallyImportComponents(
      "logoClouds/LogoCloud",
      logoCloudComponents
    );
    await dynamicallyImportComponents("stats/Stats", statsComponents);
    console.log("Finished seeding components.");
  } catch (e) {
    console.warn("Failed to seed components. Error: ", e);
  } finally {
    isSeeding = false;
  }
}

console.log("heros:", heroComponents);
console.log("stats:", statsComponents);
console.log("footers:", footerComponents);
console.log("logoClouds:", logoCloudComponents);
console.log("features:", featureComponents);
console.log("ctas:", ctaComponents);
