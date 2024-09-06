"use client";

import React from "react";
import { useComponentsContext } from "@/contexts/ComponentsContext";
import { notFound } from "next/navigation";

const PreviewPage = ({ params }) => {
  const { id } = params;
  const { components } = useComponentsContext();

  if (!id || !components) {
    return <div>Loading...</div>;
  }

  const componentMap = {
    nav: components.navComponents,
    hero: components.heroComponents,
    logocloud: components.logoCloudComponents,
    feature: components.featureComponents,
    stats: components.statsComponents,
    cta: components.ctaComponents,
    footer: components.footerComponents,
  };

  // Split the ID into components
  const segments = id.split("-");
  const componentsToRender = [];

  for (let i = 0; i < segments.length; i += 2) {
    const name = segments[i];
    const index = parseInt(segments[i + 1], 10);

    if (componentMap[name] && componentMap[name][index]) {
      componentsToRender.push(componentMap[name][index]);
    } else {
      console.warn(`Component ${name} with index ${index} not found.`);
    }
  }

  if (componentsToRender.length === 0) {
    notFound();
  }

  return (
    <div className="no-scrollbar bg-white">
      {componentsToRender.map((Component, idx) => (
        <div key={idx}>
          <Component />
        </div>
      ))}
    </div>
  );
};

export default PreviewPage;

// import { seedComponents } from "@/utils/dynamicImports";

// export default async function PreviewPage({ params }) {
//   const { id } = params;

//   // Seed components on the server
//   const seededComponents = await seedComponents();

//   if (!id || !seededComponents) {
//     return <div>Error loading page or no components found.</div>;
//   }

//   const componentMap = {
//     hero: seededComponents.heroComponents,
//     logocloud: seededComponents.logoCloudComponents,
//     feature: seededComponents.featureComponents,
//     stats: seededComponents.statsComponents,
//     cta: seededComponents.ctaComponents,
//     footer: seededComponents.footerComponents,
//   };

//   // Split the ID into components
//   const segments = id.split("-");
//   const componentsToRender = [];

//   // Iterate over the segments to extract component names and indexes
//   for (let i = 0; i < segments.length; i += 2) {
//     const name = segments[i];
//     const index = parseInt(segments[i + 1], 10);

//     if (componentMap[name] && componentMap[name][index]) {
//       componentsToRender.push(componentMap[name][index]);
//     } else {
//       console.warn(`Component ${name} with index ${index} not found.`);
//     }
//   }

//   return (
//     <div>
//       {componentsToRender.map((Component, idx) => (
//         <div key={idx}>
//           <Component />
//         </div>
//       ))}
//     </div>
//   );
// }
