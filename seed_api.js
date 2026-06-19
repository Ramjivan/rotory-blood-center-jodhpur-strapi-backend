const { createStrapi } = require('@strapi/strapi');

const charges = [
  { component: 'PACKED RED BLOOD CELLS', price: 1250, order: 1, details: 'Used for anemia and acute blood loss. Stored at 2-6°C.' },
  { component: 'FRESH FROZEN PLASMA', price: 400, order: 2, details: 'Used for coagulation factor deficiencies. Stored at -20°C or colder.' },
  { component: 'RANDOM DONOR PLATELET', price: 400, order: 3, details: 'Used to treat thrombocytopenia. Prepared from whole blood donations.' },
  { component: 'SINGLE DONOR PLATELET', price: 9000, order: 4, details: 'High-yield platelets collected via apheresis from a single donor.' },
  { component: 'CRYOPRECIPITATE', price: 400, order: 5, details: 'Rich in fibrinogen and Factor VIII. Used for bleeding disorders.' },
  { component: 'WHOLE BLOOD', price: 1250, order: 6, details: 'Used for severe hemorrhage and massive transfusion protocols.' },
  { component: 'DONOR SCREENING FOR ASPHERESIS', price: 500, order: 7, details: 'Mandatory rigorous testing protocol for specialized apheresis donors.' },
  { component: 'PAEDIATRIC BAG EXTRA', price: 400, order: 8, details: 'Specialized smaller volume bag aliquoting for pediatric/neonatal use.' },
  { component: 'THERAPEUTIC PHLEBOTOMY', price: 800, order: 9, details: 'Medical procedure to remove blood for conditions like hemochromatosis.' },
];

async function seed() {
  try {
    const app = await createStrapi().load();
    
    // Clear existing
    const existing = await app.documents('api::processing-charge.processing-charge').findMany({ status: 'published' });
    if (existing && existing.length > 0) {
      for (const item of existing) {
        await app.documents('api::processing-charge.processing-charge').delete({ documentId: item.documentId });
      }
    }
    
    for (const charge of charges) {
      await app.documents('api::processing-charge.processing-charge').create({
        data: charge,
        status: 'published'
      });
      console.log('Inserted:', charge.component);
    }
    
    console.log('Seed with details completed successfully!');
  } catch (error) {
    console.error('Seeding failed:', error);
  }
  process.exit(0);
}

seed();
