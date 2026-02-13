document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    // ページタイトルのフェードイン
    gsap.from(".title-orange", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out"
    });

    // 本社のフェードイン
    gsap.from(".hq-card", {
        scrollTrigger: {
            trigger: ".hq-card",
            start: "top 85%",
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out"
    });

    // 営業所カードの順次フェードイン
    gsap.from(".office-grid .office-card", {
        scrollTrigger: {
            trigger: ".office-grid",
            start: "top 85%",
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1, // 0.1秒ずつずらして表示
        ease: "power3.out"
    });

    // グループ会社の順次フェードイン
    gsap.from(".group-grid .group-card", {
        scrollTrigger: {
            trigger: ".group-grid",
            start: "top 90%",
        },
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
    });

});