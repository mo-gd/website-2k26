import { LandingSection } from "#/sections/landing.section";
import { LineUpSection } from "#/sections/line-up.section";
import { StorySection } from "#/sections/story.section";
import { TimeTableSection } from "#/sections/time-table.section";

const HomePage = () => {
  return (
    <main>
      <LandingSection />

      <TimeTableSection />

      <LineUpSection />

      <StorySection />
    </main>
  );
};

export default HomePage;
