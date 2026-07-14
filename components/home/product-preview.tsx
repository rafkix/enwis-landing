"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { MockupFrame } from "@/components/shared/mockups/mockup-frame";
import {
  TeacherDashboardMockup,
  StudentExamMockup,
  AnalyticsMockup,
} from "@/components/shared/mockups/dashboard-mockups";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  { value: "teacher", label: "O'qituvchi paneli", path: "app.enwis.uz/dashboard" },
  { value: "student", label: "Talaba interfeysi", path: "app.enwis.uz/exam" },
  { value: "analytics", label: "Tahlil", path: "app.enwis.uz/analytics" },
] as const;

export function ProductPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-editorial">
        <SectionHeading
          align="center"
          eyebrow="Jonli ko'rinish"
          title="Bu — haqiqiy interfeys, maket emas"
          description="Uchta rolni tanlab, Enwis ichida nima borligini o'zingiz ko'ring."
          className="mx-auto"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center"
        >
          <Tabs defaultValue="teacher" className="w-full max-w-3xl">
            <TabsList className="mx-auto mb-8 flex w-fit">
              {TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="teacher">
              <MockupFrame path={TABS[0].path} className="mx-auto max-w-3xl">
                <TeacherDashboardMockup />
              </MockupFrame>
            </TabsContent>
            <TabsContent value="student">
              <MockupFrame path={TABS[1].path} className="mx-auto max-w-md">
                <StudentExamMockup />
              </MockupFrame>
            </TabsContent>
            <TabsContent value="analytics">
              <MockupFrame path={TABS[2].path} className="mx-auto max-w-3xl">
                <AnalyticsMockup />
              </MockupFrame>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
