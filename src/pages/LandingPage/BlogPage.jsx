import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock3, PenTool } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import SectionHeader from "../../components/LandingPage/SectionHeader";
import coverOne from "../../assets/img/WFP-03520.jpg";
import coverTwo from "../../assets/img/WFP-03523.jpg";
import coverThree from "../../assets/img/WFP-03524.jpg";

const articles = [
  {
    title: "How development communication turns complex projects into clear stories",
    category: "Editorial",
    date: "May 2026",
    readTime: "5 min read",
    excerpt:
      "A practical look at how strong visuals and focused messaging help institutions explain impact without losing credibility.",
    image: coverOne,
  },
  {
    title: "Why field production matters for NGO and public-sector visibility",
    category: "Production",
    date: "April 2026",
    readTime: "4 min read",
    excerpt:
      "Field documentation gives audiences the evidence, context, and human detail that polished reports alone cannot carry.",
    image: coverTwo,
  },
  {
    title: "What makes a campaign video feel trustworthy and memorable",
    category: "Story craft",
    date: "March 2026",
    readTime: "6 min read",
    excerpt:
      "The best campaign films combine editorial restraint, clear structure, and a human voice that audiences can believe.",
    image: coverThree,
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,76,129,0.4),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.24),transparent_28%)]" />
        <div className="relative container mx-auto px-4 py-24 text-center text-white sm:px-5 lg:px-20 lg:py-28">
          <Badge
            variant="outline"
            className="border-white/20 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-white"
          >
            Blog
          </Badge>
          <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            OHI Stories
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            Editorial notes, production insights, and development communication ideas
            from Olympian House International.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-5 lg:px-20">
          <SectionHeader
            title="Featured Articles"
            description="Selected writing that reflects how OHI thinks about story, visibility, and impact."
            className="max-w-4xl"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <Card
                key={article.title}
                className="group overflow-hidden border-[#D9DCE2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,36,0.06)_0%,rgba(5,22,36,0.72)_100%)]" />
                  <Badge className="absolute left-5 top-5 border-white/20 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primaryColor backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor">
                    {article.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-textColor">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-[#0f4c81]" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[#0f4c81]" />
                      {article.readTime}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pb-6">
                  <CardDescription className="text-base leading-7 text-textColor">
                    {article.excerpt}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex items-center justify-between pt-0">
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn h-10 rounded-full px-0 text-sm font-semibold text-slate-700 hover:bg-transparent hover:text-slate-900"
                  >
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Contact OHI <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                  <PenTool className="h-4 w-4 text-[#0f4c81]" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
