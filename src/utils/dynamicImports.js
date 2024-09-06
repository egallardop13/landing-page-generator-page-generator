export const heroComponents = [];
export const ctaComponents = [];
export const featureComponents = [];
export const footerComponents = [];
export const logoCloudComponents = [];
export const statsComponents = [];
export const navComponents = [];

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
