"use client";

import ChatWidget from "@/components/ChatWidget";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  MapPin,
  Award,
  Users,
  ClipboardList,
  FileText,
  Gift,
  Languages,
  Shield,
  WifiOff,
  Bell,
  Wrench,
  MonitorSmartphone,
} from "lucide-react";

type TabKey = "checklist" | "bookings" | "rewards" | "account";

export default function ProjectAWAREPortal() {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("checklist");

  const handleSubmit = () => {
    if (address.trim()) setSubmitted(true);
  };

  const postcodeMatch = address.match(/(\d{4})/);
  const postcode = postcodeMatch ? postcodeMatch[1] : "2000";

 const pageBackgroundStyle = !submitted
  ? {
      backgroundImage: "url('/project-aware-shield-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }
  : {};

return (
  <div
    className={`min-h-screen text-slate-900 ${
      submitted ? "bg-[#F5F7FB]" : ""
    }`}
    style={pageBackgroundStyle}
  >
          {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <img
              src="/Suncorp-Bank-Logo.jpg"
              alt="Suncorp logo"
              className="h-9 w-auto rounded-sm"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Project Aware
              </span>
              <h1 className="text-sm md:text-base font-semibold text-slate-900">
                Action with Awareness and Resilience Engagement
              </h1>
            </div>
          </div>

          <Button
            variant="outline"
            className="rounded-full px-5 h-9 text-sm border-slate-300 bg-white/70 hover:bg-slate-50 shadow-sm"
          >
            Sign in
          </Button>
        </div>
      </header>



      <main className="px-8 py-6 space-y-6">
         {/* Address capture / personalisation gate */}
  {!submitted ? (
    <section className="relative -mx-8 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
      {/* Soft gradient over the background image for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/60" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-30 h-[835px] w-[835px] rounded-full shield-glow" />

      <Card className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/40 bg-slate-50/90 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.8)]">
        <CardHeader className="pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700 mb-1">
            Hail pilot · Project AWARE
          </p>
          <CardTitle className="text-3xl font-semibold text-slate-900">
            Let’s personalise your hail preparedness dashboard
          </CardTitle>
          <p className="text-sm text-slate-600 mt-2">
            Enter your full address so Project AWARE can tailor actions to your
            postcode, home type and household.
          </p>
        </CardHeader>

        <CardContent className="pt-0 pb-6 px-6 space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Home address
            </label>
            <Input
              placeholder="e.g. 125 Pitt Street, Sydney NSW 2000"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="h-12 text-base border-slate-200 bg-white/80 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-[#FFD200] hover:bg-[#E5BE00] text-slate-900 font-semibold px-8 h-11 rounded-full shadow-md shadow-amber-500/30"
            >
              Generate my resilience dashboard
            </Button>

            {/* Cross-platform access banner */}
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <MonitorSmartphone className="w-4 h-4" />
              <span>
                Available on web · Progress syncs securely
                
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  ) : (
    <>
      {/* Top hero row */}
      {/* ...leave everything below here exactly as you already have it */}
            {/* Top hero row */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4">
              {/* Resilience dashboard hero */}
              <Card className="shadow-md border-none">
                <CardContent className="pt-5 pb-4 px-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Hail pilot · Metropolitan focus
                      </p>
                      <h2 className="text-2xl font-semibold text-slate-900 mt-1">
                        {postcode} Resilience Dashboard
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Top risks:{" "}
                        <span className="font-medium text-slate-800">
                          Severe hailstorm
                        </span>{" "}
                        • flash flood • heatwave
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Resilience score
                      </span>
                      <p className="text-3xl font-bold text-emerald-600">
                        72%
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div className="h-2 bg-emerald-500 rounded-full w-[72%]" />
                  </div>

                  <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <AlertTriangle className="w-4 h-4 mt-0.5 text-amber-500" />
                    <div>
                      <p className="text-sm font-medium text-amber-900">
                        Hail risk elevated this month in your area.
                      </p>
                      <p className="text-xs text-amber-800 mt-1">
                        Move vehicles undercover where possible and check roofing
                        for existing damage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Postcode / alerts panel */}
              <Card className="shadow-md border-none">
                <CardContent className="pt-5 pb-4 px-6 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Personalisation
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Address:{" "}
                      <span className="font-semibold text-slate-900">
                        {address}
                      </span>
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      You can update this anytime in your account settings.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                      Postcode
                    </label>
                    <Input
                      value={postcode}
                      readOnly
                      className="h-10 text-sm bg-slate-50 border-slate-200"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 mt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Bell className="w-4 h-4" />
                      <span>Enable hail alerts & preparedness nudges</span>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500">
                      <span className="inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Web push, SMS or email notifications. You control how and
                    when we contact you.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <div className="mt-4 bg-white rounded-full inline-flex px-1 py-1 shadow-sm border border-slate-100">
              {[
                { key: "checklist", label: "Checklist" },
                { key: "bookings", label: "Bookings" },
                { key: "rewards", label: "Rewards & Community" },
                { key: "account", label: "Account & Settings" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as TabKey)}
                  className={`px-4 py-1.5 text-sm rounded-full transition ${
                    activeTab === tab.key
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === "checklist" && (
              <section className="grid grid-cols-1 lg:grid-cols-[2fr,1.2fr] gap-4 mt-4">
                {/* Personalised checklist + risk assessment */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <ClipboardList className="w-5 h-5 text-emerald-600" />
                      This week’s hail preparedness tasks
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Tailored to your postcode, home type and household.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="h-2 bg-emerald-500 rounded-full w-[65%]" />
                    </div>
                    <p className="text-xs text-right text-slate-500">
                      65% complete · 3 of 5 critical tasks done
                    </p>

                    <div className="space-y-2">
                      {[
                        {
                          label: "Secure loose balcony / yard items",
                          time: "~10 minutes",
                          done: false,
                        },
                        {
                          label: "Park vehicles under cover",
                          time: "~5 minutes",
                          done: false,
                        },
                        {
                          label: "Pack / refresh emergency kit",
                          time: "~15 minutes",
                          done: true,
                        },
                        {
                          label: "Save key contacts & evacuation route",
                          time: "~10 minutes",
                          done: true,
                        },
                      ].map((task) => (
                        <div
                          key={task.label}
                          className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5"
                        >
                          <div>
                            <p
                              className={`text-sm ${
                                task.done ? "line-through text-slate-400" : ""
                              }`}
                            >
                              {task.label}
                            </p>
                            <p className="text-[11px] text-slate-500">
                              {task.time}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant={task.done ? "outline" : "default"}
                            className={`h-7 px-3 text-xs rounded-full ${
                              task.done
                                ? "border-slate-300 text-slate-600 bg-white"
                                : "bg-slate-900 text-white"
                            }`}
                          >
                            {task.done ? "Undo" : "Done"}
                          </Button>
                        </div>
                      ))}
                    </div>

                    {/* Risk self-assessment + Digital passport CTA */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3">
                      <Card className="border border-slate-100 shadow-none bg-slate-50">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-2 text-sm">
                            <Award className="w-4 h-4 text-emerald-600" />
                            Risk self-assessment
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-xs text-slate-600">
                            6 questions on roof type, car parking, drainage and
                            yard risk.
                          </p>
                          <Button className="h-8 text-xs rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
                            Start assessment
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border border-slate-100 shadow-none bg-slate-50">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center gap-2 text-sm">
                            <FileText className="w-4 h-4 text-slate-700" />
                            Digital Resilience Passport
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <p className="text-xs text-slate-600">
                            Your completed actions are securely stored and can
                            be exported as evidence for insurance claims or
                            rebates.
                          </p>
                          <Button className="h-8 text-xs rounded-full bg-[#FFD200] hover:bg-[#E5BE00] text-slate-900 font-semibold">
                            Export PDF summary
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                {/* Local risk tips & multi-language note */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-slate-900 text-base">
                      Local risk tips for {postcode}
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Based on BoM, SES and Suncorp claims data.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      {
                        title: "Severe hailstorm",
                        body: "Move vehicles under cover, secure outdoor furniture and close blinds/curtains.",
                      },
                      {
                        title: "Flash flood",
                        body: "Move valuables off the floor and check balcony / yard drainage.",
                      },
                      {
                        title: "Heatwave",
                        body: "Prepare water, check on vulnerable neighbours and pets.",
                      },
                    ].map((tip) => (
                      <div
                        key={tip.title}
                        className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
                      >
                        <p className="text-sm font-medium text-slate-900">
                          {tip.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          {tip.body}
                        </p>
                      </div>
                    ))}

                    <div className="pt-2 border-t border-slate-100 mt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <Languages className="w-4 h-4" />
                          <span>Multi-language & accessibility support</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 px-3 text-xs rounded-full border-slate-300"
                        >
                          Change language
                        </Button>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Available in Vietnamese, Arabic, Mandarin, Hindi and
                        Greek with plain-English, large-text and screen-reader
                        friendly layouts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {activeTab === "bookings" && (
              <section className="grid grid-cols-1 lg:grid-cols-[2fr,1.2fr] gap-4 mt-4">
                {/* Preparedness hub finder + handyman booking */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                      Preparedness Hub Finder & Local Assistance
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Book trusted providers or attend council and SES events
                      near you.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-xl bg-slate-50 border border-slate-100 px-3 py-3">
                      <p className="text-sm font-medium text-slate-900">
                        Map view (prototype)
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        Metro hail pilot · Showing Bunnings car parks, malls and
                        council pop-ups participating in “Project AWARE
                        Week”.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Roof inspection",
                        "Gutter clean",
                        "Storm shutters / window covers",
                        "Tree trimming",
                        "Emergency kit delivery",
                        "Handyman: hail-readiness check",
                      ].map((service) => (
                        <Card
                          key={service}
                          className="border border-slate-100 shadow-none bg-white"
                        >
                          <CardContent className="pt-3 pb-3 px-3 space-y-1.5">
                            <p className="text-sm font-medium text-slate-900">
                              {service}
                            </p>
                            <p className="text-[11px] text-slate-500">
                              Available from vetted providers in your suburb.
                            </p>
                            <div className="flex gap-2 mt-2">
                              <Button className="h-8 text-xs rounded-full bg-slate-900 text-white">
                                Book now
                              </Button>
                              <Button
                                variant="outline"
                                className="h-8 text-xs rounded-full border-slate-300"
                              >
                                Get quote
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Offline access + SES events */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <Wrench className="w-5 h-5 text-slate-700" />
                      In-person help & offline resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-xl bg-slate-50 border border-slate-100 px-3 py-3">
                      <p className="text-sm font-medium text-slate-900">
                        Upcoming events
                      </p>
                      <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                        <li>
                          • SES hail-preparedness workshop – Westfield
                          Parramatta, Sat 11am
                        </li>
                        <li>
                          • Bunnings pop-up: DIY hail protection kits – Sunday
                          9am–1pm
                        </li>
                        <li>
                          • Council info stall – local library, Thursday
                          evening
                        </li>
                      </ul>
                    </div>

                    <Card className="border border-slate-100 shadow-none bg-slate-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-sm text-slate-900">
                          <WifiOff className="w-4 h-4 text-slate-600" />
                          Offline & low-connectivity access
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-xs text-slate-600">
                          Download simple checklists and emergency plan
                          templates to print or save on your phone.
                        </p>
                        <Button
                          variant="outline"
                          className="h-8 text-xs rounded-full border-slate-300"
                        >
                          Download printable guides
                        </Button>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>
            )}

            {activeTab === "rewards" && (
              <section className="grid grid-cols-1 lg:grid-cols-[2fr,1.2fr] gap-4 mt-4">
                {/* Badges + incentives */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <Gift className="w-5 h-5 text-emerald-600" />
                      Behavioural nudges, badges & rewards
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Turning small preparedness steps into visible progress.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Storm Ready",
                        "Kit Packed",
                        "Roof Checked",
                        "Gutters Clear",
                        "Evac Plan",
                        "Neighbour Boost",
                      ].map((badge) => (
                        <div
                          key={badge}
                          className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 text-center"
                        >
                          <p className="text-xs font-medium text-slate-900">
                            {badge}
                          </p>
                          <p className="text-[10px] text-slate-500 mt-1">
                            Earned by completing key hail-preparedness actions.
                          </p>
                        </div>
                      ))}
                    </div>

                    <Card className="border border-slate-100 shadow-none bg-emerald-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-slate-900">
                          Monthly resilience draw
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-xs text-slate-700">
                          Complete 3 priority actions this month to enter the
                          Resilience Draw. Partner offers (e.g. Bunnings,
                          Woolworths) appear here. Rewards are{" "}
                          <span className="font-semibold">
                            government or insurer-backed, not product-based.
                          </span>
                        </p>
                        <Button className="h-8 text-xs rounded-full bg-slate-900 text-white">
                          View my entries
                        </Button>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>

                {/* Community tools: leaderboard + forum */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <Users className="w-5 h-5 text-sky-600" />
                      Community engagement tools
                    </CardTitle>
                    <p className="text-xs text-slate-500">
                      Opt-in social features that build neighbourhood norms, not
                      pressure.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-xl bg-slate-50 border border-slate-100 px-3 py-3">
                      <p className="text-sm font-medium text-slate-900">
                        Local leaderboard (opt-in)
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        {postcode} is{" "}
                        <span className="font-semibold text-emerald-700">
                          3rd out of 12 suburbs
                        </span>{" "}
                        in metro hail preparedness this month.
                      </p>
                      <Button
                        variant="outline"
                        className="h-8 text-xs rounded-full mt-2 border-slate-300"
                      >
                        View suburb preparedness map
                      </Button>
                    </div>

                    <Card className="border border-slate-100 shadow-none bg-slate-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-slate-900">
                          Forums & “Ready Together” challenges
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-xs text-slate-600">
                          Ask SES volunteers questions, share DIY tips, and join
                          suburb-wide challenges (e.g. “80% of homes kit-ready
                          before storm season”).
                        </p>
                        <Button className="h-8 text-xs rounded-full bg-emerald-600 text-white">
                          Open community hub
                        </Button>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>
            )}

            {activeTab === "account" && (
              <section className="grid grid-cols-1 lg:grid-cols-[2fr,1.2fr] gap-4 mt-4">
                {/* Profile + preferences */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-slate-900">
                      Profile & preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                          Name
                        </label>
                        <Input
                          value="Matthew"
                          className="h-9 text-sm border-slate-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                          Email
                        </label>
                        <Input
                          value="matthew@example.com"
                          className="h-9 text-sm border-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                          Home type
                        </label>
                        <Input
                          value="Apartment renter"
                          readOnly
                          className="h-9 text-sm bg-slate-50 border-slate-200"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                          Household profile
                        </label>
                        <Input
                          value="2 adults, 1 pet"
                          readOnly
                          className="h-9 text-sm bg-slate-50 border-slate-200"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                          Accessibility settings
                        </label>
                        <Input
                          value="Large text + high contrast"
                          readOnly
                          className="h-9 text-sm bg-slate-50 border-slate-200"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Bell className="w-4 h-4" />
                        <span>Seasonal reminders & urgent alerts</span>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-500">
                        <span className="inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow" />
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Security, data & compliance */}
                <Card className="shadow-md border-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-slate-900">
                      <Shield className="w-5 h-5 text-slate-700" />
                      Security, data & compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="rounded-xl bg-slate-50 border border-slate-100 px-3 py-3">
                      <p className="text-sm font-medium text-slate-900">
                        Secure sign-in
                      </p>
                      <p className="text-xs text-slate-600 mt-1">
                        Supports secure sign-in and 2-factor authentication for
                        added protection.
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant="outline"
                          className="h-8 text-xs rounded-full border-slate-300"
                        >
                          Change password
                        </Button>
                        <Button className="h-8 text-xs rounded-full bg-slate-900 text-white">
                          Enable 2FA
                        </Button>
                      </div>
                    </div>

                    <Card className="border border-slate-100 shadow-none bg-slate-50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-slate-900">
                          Ethical data use
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-xs text-slate-600">
                          Project AWARE aligns with the{" "}
                          <span className="font-medium">
                            Privacy Act 1988 (APPs), CPS 234 and ASIC DDO / RG
                            244
                          </span>
                          . No third-party advertising. All data collection is
                          consent-based and you can delete your profile at any
                          time.
                        </p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </section>
            )}
          </>
        )}
      </main>
      <ChatWidget />
    </div>
  );
  }
