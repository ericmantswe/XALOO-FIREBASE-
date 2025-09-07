"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, orderBy } from "firebase/firestore";
import { app } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  id: string;
  client: string;
  description: string;
  logoHint: string;
}

const db = getFirestore(app);

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, "projects");
        const q = query(projectsCollection, orderBy("order", "asc"));
        const projectSnapshot = await getDocs(q);
        const projectsList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching projects from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
              Proven Experience, Successful Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our track record demonstrates our capability to deliver excellence across various demanding industries.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="overflow-hidden bg-background">
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <Skeleton className="w-[50px] h-[50px] rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </CardContent>
              </Card>
            ))
          ) : (
            projects.map((project) => (
              <Card key={project.id} className="overflow-hidden bg-background">
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <div className="w-[50px] h-[50px] flex items-center justify-center bg-secondary rounded-lg">
                    <Image
                      src="https://picsum.photos/100/100?grayscale"
                      alt={`${project.client} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                      data-ai-hint={project.logoHint}
                    />
                  </div>
                  <CardTitle className="font-headline text-xl">{project.client}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardDescription className="text-base text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
