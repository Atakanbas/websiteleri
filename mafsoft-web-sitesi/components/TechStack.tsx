const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "PostgreSQL", "Prisma"],
    devops: ["Docker", "Vercel", "GitHub Actions"],
};

export function TechStack() {
    return (
        <section className="section-padding bg-muted/30">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Teknoloji Yığınımız
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Modern, güvenilir ve ölçeklenebilir teknolojilerle çalışıyoruz.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Frontend */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">Frontend</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techStack.frontend.map((tech) => (
                                <div
                                    key={tech}
                                    className="px-4 py-2 rounded-lg bg-background border border-border hover:shadow-md transition-shadow"
                                >
                                    <span className="text-sm font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">Backend</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techStack.backend.map((tech) => (
                                <div
                                    key={tech}
                                    className="px-4 py-2 rounded-lg bg-background border border-border hover:shadow-md transition-shadow"
                                >
                                    <span className="text-sm font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DevOps */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">DevOps</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {techStack.devops.map((tech) => (
                                <div
                                    key={tech}
                                    className="px-4 py-2 rounded-lg bg-background border border-border hover:shadow-md transition-shadow"
                                >
                                    <span className="text-sm font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
