"use client";
import { dynamicallyImportComponents } from "@/utils/dynamicImports";
import React, { createContext, useContext, useState, useEffect } from "react";

const ComponentsContext = createContext();

export const useComponentsContext = () => useContext(ComponentsContext);

export const ComponentsProvider = ({ children }) => {
  const [components, setComponents] = useState(null); // Only store once

  let isSeeding = false;
  const seedComponents = async () => {
    if (components) return components; // If already seeded, return existing components

    const seededComponents = {
      navbarComponents: [],
      heroComponents: [],
      logoCloudComponents: [],
      featureComponents: [],
      statsComponents: [],
      ctaComponents: [],
      footerComponents: [],
    };

    if (isSeeding) {
      console.warn("Already seeding components. Skipping...");
      return;
    }
    isSeeding = true;
    console.log("Seeding components...");
    try {
      await dynamicallyImportComponents(
        "navbars/Nav",
        seededComponents.navbarComponents
      );
      await dynamicallyImportComponents(
        "heroSections/Hero",
        seededComponents.heroComponents
      );
      await dynamicallyImportComponents(
        "ctaSections/CtaSection",
        seededComponents.ctaComponents
      );
      await dynamicallyImportComponents(
        "featureSections/FeatureSection",
        seededComponents.featureComponents
      );
      await dynamicallyImportComponents(
        "footers/Footer",
        seededComponents.footerComponents
      );
      await dynamicallyImportComponents(
        "logoClouds/LogoCloud",
        seededComponents.logoCloudComponents
      );
      await dynamicallyImportComponents(
        "stats/Stats",
        seededComponents.statsComponents
      );
      console.log("Finished seeding components.");
    } catch (e) {
      console.warn("Failed to seed components. Error: ", e);
    } finally {
      isSeeding = false;
    }

    setComponents(seededComponents);
    return seededComponents;
  };

  useEffect(() => {
    seedComponents(); // Automatically seed components on app start
  }, []);

  return (
    <ComponentsContext.Provider value={{ components }}>
      {children}
    </ComponentsContext.Provider>
  );
};
