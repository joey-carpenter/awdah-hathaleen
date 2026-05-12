import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col items-center bg-stone-50 font-serif text-stone-900">
            <article className="flex w-full max-w-5xl flex-col items-start">
                {/* Hero */}
                <header className="flex max-w-5xl flex-col items-start gap-8 px-6 pt-24 font-serif">
                    <h1 className="font-sans text-6xl leading-[1.05] font-bold tracking-tight md:text-7xl">
                        Who is Awdah Hathaleen?
                    </h1>
                    <p className="font-serif text-2xl leading-snug italic">
                        Teacher, father, activist, and victim of settler
                        violence.
                    </p>
                    <div className="flex flex-col justify-center gap-8 border-b border-stone-300 pb-8 font-sans text-sm text-stone-500">
                        <span className="tracking-wider uppercase">
                            By Joey Carpenter, Isabella Zapata, Dylan Lehrer
                        </span>
                    </div>
                </header>

                {/* Full-bleed hero image */}
                <figure className="mx-auto mt-16 mb-16 w-full max-w-6xl px-6">
                    <div className="relative aspect-video w-full overflow-hidden bg-stone-200">
                        <Image
                            src="/images/awdah-hero.jpg"
                            alt="Awdah Hathaleen"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <figcaption className="mt-3 max-w-3xl font-sans text-sm text-stone-500">
                        Awdah Hathaleen in Umm al-Khair, before his killing.{" "}
                        <span className="italic">
                            By Hadhalin - Masafir Yatta Municipal Council
                        </span>
                    </figcaption>
                </figure>

                {/* Body — drop cap opener */}
                <section className="max-w-3xl px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        On July 28, 2025, Awdah Hathaleen was shot and killed in
                        Masafer-Yatta, a collection of Palestinian hamlets in
                        the southern West Bank. The perpetrator, Yinon Levi, is
                        an Israeli settler who has been sanctioned by the EU and
                        the UK (The US lifted their sanction in January of
                        2025). Awdah’s story has been covered and given the
                        respect it deserves across the world by a variety of
                        sources. But in Israel, you might read the Jerusalem
                        Post and become aware that a Palestinian was shot dead
                        in “clashes with settlers.” Israel Hayom, Israel’s most
                        read newspaper, did not publish a story on the killing.
                    </p>
                </section>

                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Following the incident, multiple witness accounts and
                        reports describe behavior from individuals present in
                        very contradicting ways. According to the Israeli
                        military, the confrontation involved Palestinians,
                        referred to as terrorists, “hurling stones at Israeli
                        civilians near the area of Carmel in Judea,” framing the
                        event as a response to a threat to their lives. In this
                        view, the situation is presented as a conflict in which
                        force was used under pressure of danger, rather than as
                        an act of aggression toward Awdah Hathaleen himself.
                        However, witness testimony and reporting from the scene
                        describe a different emotional environment surrounding
                        Awdah’s death. One nurse said that, “‘Amid the chaos and
                        screaming, what stood out was the laughter—settlers and
                        soldiers beside us, laughing [While Awdah died],’”
                        suggesting no empathy was shown in the aftermath of the
                        shooting. In another account, witnesses reported that
                        three other soldiers on the scene wished they had been
                        the ones to shoot him, adding further concerns about the
                        way Awdah Hathaleen was treated in those moments. As one
                        report noted, Levi, the perpetrator, later stated, “I’m
                        glad I did it,” according to witnesses. After Awdah’s
                        death, authorities refused to immediately return his
                        body and imposed strict conditions on the funeral,
                        including limiting attendance and requiring burial
                        outside his village.
                    </p>
                </section>

                {/* Pictures of Awdah presented in a carousel */}
                <div className="my-24 w-full px-6">
                    <div className="h-128 w-full">
                        <div className="absolute left-0 flex h-128 w-screen scrollbar-none gap-8 overflow-x-scroll px-[max(1.5rem,calc((100vw-64rem)/2+1.5rem))]">
                            <Image
                                src="/images/awdah-1.jpeg"
                                alt="awdah in Rome"
                                height={1080}
                                width={960}
                                className="h-full w-auto"
                            />
                            <Image
                                src="/images/awdah-2.jpg"
                                alt="awdah in Rome"
                                height={1080}
                                width={960}
                                className="h-full w-auto"
                            />
                            <Image
                                src="/images/awdah-3.jpg"
                                alt="awdah in Rome"
                                height={1080}
                                width={960}
                                className="h-full w-auto"
                            />
                            <Image
                                src="/images/awdah-4.jpg"
                                alt="awdah in Rome"
                                height={1080}
                                width={960}
                                className="h-full w-auto"
                            />
                            <Image
                                src="/images/awdah-5.jpg"
                                alt="awdah in Rome"
                                height={1080}
                                width={960}
                                className="h-full w-auto"
                            />
                            <Image
                                src="/images/awdah-6.jpg"
                                alt="awdah in Rome"
                                height={1080}
                                width={960}
                                className="h-full w-auto"
                            />
                        </div>
                    </div>
                    <figcaption className="mt-3 max-w-3xl font-sans text-sm text-stone-500">
                        Pictures of Awdah
                        <span className="italic"> By Emily Glick</span>
                    </figcaption>
                </div>

                {/* Section continues */}
                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Awdah Hathaleen is described as a Palestinian community
                        member from Umm al-Kheir in the West Bank, who lived a
                        family centered life and was deeply involved in his
                        village’s daily social and political reality. He was
                        married to his wife, Hanady, with three young sons,
                        Watan, Muhammad, and Kinan. He was known for his close
                        relationships with both his family and friends. Beyond
                        his work and activism, he was also connected to the
                        community as a whole and youth activities. This included
                        supporting spaces for recreation such as local sports
                        and informational gatherings for children within the
                        village. People who knew him spoke about his ability to
                        build connections across differences. As one account
                        describes, "Nobody else in the world could turn an upper
                        class, suburban, white American Jew into ‘just one of
                        the guys’ in a tiny Bedouin Palestinian village under
                        Israeli occupation in the West Bank.” This reflects how
                        he was seen as someone who formed strong personal bonds
                        and made visitors feel welcomed into his life in Umm
                        al-Kheir. He was also involved in what activists call
                        “protective presence,” where international and local
                        activists stay in Palestinian communities to help stop
                        violence and document events. His outlook on life was
                        connected to hope for future generations.
                    </p>
                </section>

                {/* Pull quote */}
                <aside className="max-w-2xl px-6 py-16">
                    <blockquote className="border-l-2 border-stone-900 pl-8">
                        <p className="text-3xl leading-snug font-medium italic">
                            "Why do Israelis see us as terrorists and enemies?
                            Why is the world not acting to achieve justice for
                            Palestinians?"
                        </p>
                        <footer className="mt-4 font-sans text-sm text-stone-500 not-italic">
                            — Awdah Hathaleen, +972 Magazine, July 2024
                        </footer>
                    </blockquote>
                </aside>

                {/* Section continues */}
                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Awdah was also a Palestinian schoolteacher who taught
                        English to the people in his village. According to
                        reports by Al Jazeera, he taught his students English so
                        that they could reach wider audiences, “in hopes of
                        ending Israel’s occupation, which has ravaged his
                        village.” He was also a peace activist who played a big
                        role in improving situations that occurred in his
                        community. In his article, “Demolishing Our Dreams,” he
                        tells the world of the many times that the Israelis have
                        demolished his village. Once during an exam he received
                        a phone call from his brother where he learned the
                        horrible news that the Israelis had returned to demolish
                        everything they’ve rebuilt. He entered a panic and had
                        thoughts swirling around his head until he came to the
                        conclusion that when you live in Um al-Khair, you must
                        be able to balance caring for your village and focusing
                        on the exam. Awdah expressed that “sometimes [they
                        thought] that the Israelis want to demolish more after
                        [they] rebuild than when [they] originally built a way
                        to try to crush [their] souls.” This insight shows that
                        no matter how hard they work to resist the Israeli
                        demolitions, they’ll never see an end.
                    </p>
                </section>

                {/* Section continues */}
                <section className="flex max-w-3xl flex-col gap-6 px-6 py-12">
                    <p className="text-justify text-xl leading-relaxed">
                        Awdah was an amateur club soccer player, and devoted
                        Real Madrid fan. Awdah loved soccer because he viewed it
                        as a way of peaceful resistance and a way to provide a
                        better life for local children, to which he was
                        passionately devoted. According to ICN, “he was
                        determined to ensure that their lives would be better
                        than his.” After Awdah was killed, the village of Umm
                        al-Khair built a small children's football pitch — about
                        half a dunam (around 500 square meters) — on the very
                        spot where he was shot. They named it the Awdah
                        Hathaleen Memorial Stadium. But the memorial didn't
                        last. Pro-settler organization Regavim petitioned the
                        Israeli government, calling the pitch a "security
                        threat" to the adjacent Carmel settlement, and settlers
                        surrounded it with Israeli flags. In February 2026, the
                        Israeli government issued a formal demolition order for
                        the half-dunam of dirt where the children of Umm
                        al-Khair played in Awdah's memory.
                    </p>
                </section>

                {/* Footer spacing */}
                <div className="h-32" />
            </article>
        </div>
    );
}
