import React from "react";

const Programs = () => {
  return (
    <div className="flex flex-col gap-4 p-16">
      <h2 className="text-2xl font-bold self-center">Our Programs</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div class="program-item border rounded-3xl p-4 flex flex-col gap-4">
          <h3 className="text-xl font-semibold self-center">
            👶 Infant Care (0–2 yrs)
          </h3>
          <p>Gentle, personalized attention for your little ones.</p>
        </div>
        <div class="program-item border rounded-3xl p-4 flex flex-col gap-4">
          <h3 className="text-xl font-semibold self-center">
            🎨 Toddler Activities (2–4 yrs)
          </h3>
          <p>Fun learning through creative play and exploration.</p>
        </div>
        <div class="program-item border rounded-3xl p-4 flex flex-col gap-4">
          <h3 className="text-xl font-semibold self-center">
            📚 Preschool Prep (4–6 yrs)
          </h3>
          <p>Early literacy, social skills, and school readiness.</p>
        </div>
      </div>
      <button className="border rounded-2xl w-fit self-center p-2">
        Learn more
      </button>
    </div>
  );
};

export default Programs;
