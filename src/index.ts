import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Seed Homepage Stats
    try {
      const statsCount = await strapi.documents('api::homepage-stat.homepage-stat').findMany();
      if (statsCount.length === 0) {
        await strapi.documents('api::homepage-stat.homepage-stat').create({
          data: {
            livesSaved: "15,000+",
            activeDonors: "5,200",
            thalassemiaWarriors: "120+"
          }
        });
        console.log("✓ Seeded default homepage stats.");
      }
    } catch (err) {
      console.error("Error seeding homepage stats:", err);
    }

    // Seed Team Members
    try {
      const teamCount = await strapi.documents('api::team-member.team-member').findMany();
      if (teamCount.length === 0) {
        const defaultTeam = [
          { name: "Dr. Arvind Sharma", role: "Chief Medical Officer", bio: "Over 20 years of experience in transfusion medicine.", order: 1 },
          { name: "Dr. Meenakshi Vyas", role: "Head of Thalassemia Care", bio: "Pediatric hematology specialist.", order: 2 },
          { name: "Mr. Rajendra Gehlot", role: "Managing Director", bio: "Dedicated to Rotary's 'Service Above Self'.", order: 3 },
          { name: "Mrs. Anita Desai", role: "Camp Coordinator", bio: "Organizes mobile blood donation camps across Jodhpur.", order: 4 }
        ];
        for (const member of defaultTeam) {
          await strapi.documents('api::team-member.team-member').create({ data: member });
        }
        console.log("✓ Seeded default team members.");
      }
    } catch (err) {
      console.error("Error seeding team members:", err);
    }

    // Seed News Articles
    try {
      const articleCount = await strapi.documents('api::article.article').findMany();
      if (articleCount.length === 0) {
        const defaultArticles = [
          {
            title: "Record Breaking 500 Units Collected at JNVU Camp",
            slug: "record-breaking-500",
            date: "2026-08-15",
            excerpt: "Our Independence Day mega camp saw an overwhelming response from the youth of Jodhpur, collecting over 500 units of blood in a single day.",
            content: "Our Independence Day mega camp saw an overwhelming response from the youth of Jodhpur, collecting over 500 units of blood in a single day.\n\n## Camp Highlights\n- Over 500 donors registered and successfully donated.\n- Supported by student organizations and university volunteers.\n- Special felicitations for repeat donors.\n\nThank you Jodhpur for your incredible support!"
          },
          {
            title: "New Automated Component Separator Installed",
            slug: "new-automated-separator",
            date: "2026-07-22",
            excerpt: "To provide faster and safer blood components like Platelets and FFP, we have inaugurated state-of-the-art machinery at our facility.",
            content: "To provide faster and safer blood components like Platelets and FFP, we have inaugurated state-of-the-art machinery at our facility.\n\nThis new technology allows us to separate blood into components (red blood cells, plasma, and platelets) in a highly automated and sterile environment, ensuring higher quality and yield for emergency patient needs."
          },
          {
            title: "World Thalassemia Day Walkathon",
            slug: "world-thalassemia-day",
            date: "2026-05-08",
            excerpt: "Hundreds joined us for an awareness walkathon to support our Thalassemia Day Care Centre and educate the public on prevention.",
            content: "Hundreds joined us for an awareness walkathon to support our Thalassemia Day Care Centre and educate the public on prevention.\n\nThe walkathon highlighted the challenges faced by Thalassemia Major warriors and the importance of regular blood donations. We thank all participants and corporate sponsors who helped make this event a major success!"
          }
        ];
        for (const article of defaultArticles) {
          await strapi.documents('api::article.article').create({ data: article });
        }
        console.log("✓ Seeded default articles.");
      }
    } catch (err) {
      console.error("Error seeding articles:", err);
    }

    // Seed Camps & Drives
    try {
      const campCount = await strapi.documents('api::camp.camp').findMany();
      if (campCount.length === 0) {
        const defaultCamps = [
          {
            title: "Mega Campus Blood Drive JNVU",
            location: "New Campus Library Hall, JNVU Jodhpur",
            startDate: "2026-09-10",
            endDate: "2026-09-10",
            time: "09:00 AM - 05:00 PM",
            details: "Annual Independence month mega camp in association with JNVU Student Union. Free checkup and blood group testing for all donors.",
            organizer: "JNVU Student Council & RBC"
          },
          {
            title: "Community Donation Drive Shastri Nagar",
            location: "K. N. Wanchoo Rotary Bhawan, Gaurav Path, Jodhpur",
            startDate: "2026-10-02",
            endDate: "2026-10-02",
            time: "10:00 AM - 04:00 PM",
            details: "Gandhi Jayanti Special Blood Donation Camp. Help us support Thalassemia patients with voluntary blood donations.",
            organizer: "Rotary Club Jodhpur Mid-Town"
          },
          {
            title: "Corporate Wellness Blood Camp",
            location: "MIA Industrial Association Hall, Basni Phase-II",
            startDate: "2026-10-15",
            endDate: "2026-10-15",
            time: "09:30 AM - 03:30 PM",
            details: "Voluntary blood donation drive organized by basni industrial area partners for employee wellness.",
            organizer: "M MIA & RBC Jodhpur"
          },
          {
            title: "World Blood Donor Day Drive",
            location: "Sardarpura Community Centre, Jodhpur",
            startDate: "2026-06-14",
            endDate: "2026-06-14",
            time: "09:00 AM - 04:00 PM",
            details: "Successfully collected 150+ units of blood on World Blood Donor Day. Special thanks to all young donors who participated.",
            organizer: "Sardarpura Youth Association"
          },
          {
            title: "Summer Relief Blood Camp",
            location: "Sector-E Park, Shastri Nagar, Jodhpur",
            startDate: "2026-05-20",
            endDate: "2026-05-20",
            time: "08:00 AM - 01:00 PM",
            details: "Early morning summer drive. Collected 95 units of blood to replenish our packed red cell stocks.",
            organizer: "Shastri Nagar Residents Welfare"
          }
        ];
        for (const camp of defaultCamps) {
          await strapi.documents('api::camp.camp').create({ data: camp });
        }
        console.log("✓ Seeded default donation camps.");
      }
    } catch (err) {
      console.error("Error seeding donation camps:", err);
    }
  },
};
