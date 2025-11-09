// app/api/aware-chat/route.ts

export async function POST(req: Request) {
  const body = await req.json();
  const userMessages = body.messages ?? [];
  const lastUser = userMessages.filter((m: any) => m.role === "user").at(-1);
  const input = lastUser?.content?.toLowerCase() ?? "";

  let reply =
    "I'm here to help you prepare for hailstorms and extreme weather. You can ask things like “how can I protect my car from hail?” or “what should go in an emergency kit?”.";
  
  // === CORE THEMES ===

  // HAIL PREPAREDNESS
  if (input.includes("prepare") && input.includes("hail")) {
    reply =
      "To prepare your home for hail:\n\n• Move cars under cover or use thick blankets.\n• Bring outdoor furniture, plants and toys inside.\n• Close curtains to prevent glass scatter.\n• Check your roof and gutters for loose tiles or debris.\n• Keep your emergency kit and insurance documents ready.";
  } 
  else if (input.includes("car") && input.includes("hail")) {
    reply =
      "To protect your car from hail:\n\n• Park in a garage or under a solid shelter.\n• If no cover is available, use thick blankets or a hail cover.\n• Avoid parking under trees or powerlines.\n• After hail, check for dents or broken glass and document damage for insurance.";
  } 
  else if (input.includes("roof")) {
    reply =
      "Roof readiness tips:\n\n• Check and repair cracked tiles or rusted metal sheets.\n• Clean gutters and downpipes to prevent overflow.\n• Trim overhanging branches.\n• If you rent, report roof issues to your landlord early.";
  }
  else if (input.includes("gutter")) {
    reply =
      "Cleaning gutters reduces hail and flood damage risk:\n\n• Remove leaves and debris before storm season.\n• Install leaf guards if possible.\n• Check downpipes are flowing freely.";
  }
  else if (input.includes("window") || input.includes("glass")) {
    reply =
      "During hail:\n\n• Close curtains and blinds to reduce flying glass.\n• Move people and pets away from windows.\n• Use temporary protection like plywood or heavy curtains if you expect severe hail.";
  }

  // EMERGENCY KIT / PREPAREDNESS
  else if (input.includes("emergency kit") || input.includes("what should i pack")) {
    reply =
      "A good emergency kit includes:\n\n• Torch + spare batteries\n• First aid kit and any medications\n• Bottled water (10L per person)\n• Non-perishable food\n• Battery-powered radio\n• Important documents (insurance, ID)\n• Power bank / phone charger\n• Pet supplies if needed";
  }
  else if (input.includes("plan") || input.includes("evacuation")) {
    reply =
      "Create a simple emergency plan:\n\n• Know where to shelter during hail or storms.\n• Identify evacuation routes and meeting points.\n• Save SES (132 500) and emergency (000) numbers.\n• Share your plan with family or neighbours.";
  }

  // AFTER A STORM
  else if (input.includes("after") && input.includes("hail")) {
    reply =
      "After hail:\n\n• Stay clear of broken glass, powerlines, and flooding.\n• Take photos of any damage before cleaning up.\n• Contact Suncorp or your insurer as soon as it’s safe.\n• Check on vulnerable neighbours.";
  }
  else if (input.includes("damage") && input.includes("report")) {
    reply =
      "If you’ve experienced hail damage:\n\n• Ensure safety first.\n• Take photos before starting clean-up.\n• Call Suncorp Claims or log it via your insurance app.\n• For urgent damage, contact SES on 132 500.";
  }

  // ALERTS / NOTIFICATIONS
  else if (input.includes("alert") || input.includes("warning")) {
    reply =
      "To receive hail and storm alerts:\n\n• Enable notifications in Project AWARE’s settings.\n• Follow the Bureau of Meteorology app or website.\n• Check local council and SES Facebook pages for regional alerts.";
  }

  // REWARDS / COMMUNITY
  else if (input.includes("reward") || input.includes("leaderboard")) {
    reply =
      "You can earn badges like 'Storm Ready' or 'Kit Packed' by completing tasks in your checklist. Completing three priority actions each month enters you into the Suncorp Resilience Draw for community or partner rewards.";
  }

  // GENERAL
  else if (input.includes("suncorp")) {
    reply =
      "Project AWARE is a Suncorp initiative to help Australians prepare for hail and extreme weather. For claims or insurance questions, please contact Suncorp directly or use their customer portal.";
  }
  else if (input.includes("who are you") || input.includes("what is project aware")) {
    reply =
      "I'm the Project AWARE Assistant — here to help you prepare for hailstorms and extreme weather. AWARE stands for Action with Awareness and Resilience Engagement, a Suncorp community initiative.";
  }
  else if (input.includes("hi") || input.includes("hello")) {
    reply = "Hi there 👋 I'm the Project AWARE assistant. How can I help you prepare today?";
  }
  else if (input.includes("thank")) {
    reply = "You're very welcome! Stay safe and prepared — small actions make a big difference during hail season.";
  }

  // DEFAULT / FALLBACK
  else if (reply === "") {
    reply =
      "I’m not sure about that one, but I can help with topics like:\n• Hail and storm preparation\n• Emergency kits\n• Roof and gutter checks\n• Alerts and community programs\nWhat would you like to know about?";
  }

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
