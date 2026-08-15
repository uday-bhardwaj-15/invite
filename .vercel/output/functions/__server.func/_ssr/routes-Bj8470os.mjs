import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as ChevronDown, i as Clock, n as Volume2, o as CalendarPlus, r as MapPin, t as VolumeX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bj8470os.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var envelope_bg_default = "/assets/envelope-bg-D_7cnMoC.jpg";
var wax_seal_default = "/assets/wax-seal-DK9L6Mib.png";
function EnvelopeGate({ onOpen }) {
	const [opening, setOpening] = (0, import_react.useState)(false);
	const [flapOpened, setFlapOpened] = (0, import_react.useState)(false);
	const [gone, setGone] = (0, import_react.useState)(false);
	const handleOpen = () => {
		if (opening) return;
		setOpening(true);
		onOpen();
		window.setTimeout(() => setFlapOpened(true), 450);
		window.setTimeout(() => setGone(true), 2800);
	};
	if (gone) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[oklch(0.96_0.02_15)]",
		style: { animation: opening ? "gate-fade-out 800ms ease-in-out 2000ms forwards" : void 0 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 blur-lg scale-110",
				style: { backgroundImage: `url(${envelope_bg_default})` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				style: { background: "radial-gradient(ellipse at 50% 45%, oklch(0.95 0.03 15 / 0.75) 0%, oklch(0.85 0.06 18 / 0.9) 75%, oklch(0.75 0.08 20 / 0.95) 100%)" },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handleOpen,
				"aria-label": "Tap to open the wedding invitation",
				className: "relative mx-auto aspect-[942/998] w-[88vw] max-w-[420px] cursor-pointer select-none focus:outline-none transition-transform duration-300 active:scale-[0.99]",
				style: {
					perspective: "1500px",
					transformStyle: "preserve-3d"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-6 left-[8%] right-[8%] h-10 rounded-[50%] bg-[oklch(0.3_0.1_20/0.4)] blur-xl transition-all duration-700",
						style: {
							transform: opening ? "scale(1.15) translateY(12px)" : "scale(1)",
							opacity: opening ? .25 : .55
						},
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 overflow-hidden rounded-[10px] bg-[#611c2e] shadow-[0_16px_40px_rgba(70,18,30,0.35)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0",
								style: { background: "radial-gradient(circle at 50% 30%, #7d263c 0%, #561727 60%, #3e0e1a 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2.5 rounded-[6px] border border-[#d4af37]/35" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-3.5 rounded-[4px] border border-[#d4af37]/20" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-[5%] bottom-[5%] top-[8%] z-20 overflow-hidden rounded-[8px] bg-[#fffef9] shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
						style: {
							animation: opening ? "card-emerge 1300ms cubic-bezier(0.16, 1, 0.3, 1) 450ms forwards" : void 0,
							willChange: "transform"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full flex-col items-center justify-between p-5 text-center sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-2.5 rounded-[5px] border border-[#d8b066]/65" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-3.5 rounded-[3px] border border-[#d8b066]/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mx-auto mb-1 flex items-center justify-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-7 bg-gradient-to-r from-transparent to-[#d8b066]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.65rem] text-[#d8b066]",
												children: "✦"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-7 bg-gradient-to-l from-transparent to-[#d8b066]" })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-[0.65rem] tracking-[0.35em] text-[#8e5260] uppercase font-medium",
										children: "Wedding Invitation"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "my-auto py-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-script text-4xl sm:text-5xl leading-tight text-[#822137] drop-shadow-sm",
											children: "Veer & Zara"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mx-auto my-1.5 flex items-center justify-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-[#d8b066]/70" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-script text-sm text-[#d8b066]",
													children: "♥"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-[#d8b066]/70" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-[0.7rem] tracking-[0.2em] text-[#6d464f] uppercase",
											children: "Together with their families"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xs tracking-[0.25em] text-[#822137] font-semibold",
										children: "JUNE 30, 2026"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-[0.62rem] tracking-[0.15em] text-[#936671] uppercase mt-0.5",
										children: "The Taj Mahal Palace • Mumbai"
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute inset-0 z-25 overflow-hidden rounded-[10px]",
						style: { clipPath: "polygon(0 0, 50% 67.5%, 100% 0, 100% 100%, 0 100%)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: envelope_bg_default,
							alt: "",
							"aria-hidden": "true",
							className: "absolute left-[-4.35%] top-[-24.65%] h-[153.9%] w-[108.7%] max-w-none object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							style: { background: "linear-gradient(to bottom, transparent 0%, rgba(60,15,25,0.06) 67.5%, transparent 70%)" }
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 top-0 h-[67.5%] origin-top",
						style: {
							transformStyle: "preserve-3d",
							zIndex: flapOpened ? 10 : 35,
							animation: opening ? "flap-fold-up 900ms cubic-bezier(0.4, 0, 0.2, 1) forwards" : void 0,
							willChange: "transform"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 overflow-visible",
							style: { backfaceVisibility: "hidden" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 overflow-hidden",
								style: { clipPath: "polygon(0 0, 100% 0, 50% 100%)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: envelope_bg_default,
									alt: "",
									"aria-hidden": "true",
									className: "absolute left-[-4.35%] top-[-36.5%] h-[228%] w-[108.7%] max-w-none object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/15" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 select-none",
								style: {
									width: "96px",
									height: "96px",
									animation: opening ? void 0 : "soft-float 4.5s ease-in-out infinite"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 rounded-full blur-md",
										style: {
											background: "radial-gradient(circle, rgba(235,190,95,0.7) 0%, rgba(212,160,50,0.15) 70%, transparent 100%)",
											animation: "glow-pulse 3s ease-in-out infinite"
										},
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: wax_seal_default,
										alt: "Golden wax seal",
										width: 192,
										height: 192,
										className: "h-full w-full object-contain drop-shadow-[0_6px_14px_rgba(90,40,10,0.55)]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-script absolute inset-0 flex flex-col items-center justify-center text-[1.1rem] leading-[0.88] font-bold text-[#542d06]",
										style: { textShadow: "0 1px 1px rgba(255,245,210,0.9), 0 -1px 1px rgba(80,40,0,0.45)" },
										children: [
											"Tap",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.9rem] font-normal leading-[0.85]",
												children: "to"
											}),
											"open"
										]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 overflow-hidden",
							style: {
								backfaceVisibility: "hidden",
								transform: "rotateX(180deg)",
								clipPath: "polygon(0 0, 100% 0, 50% 100%)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full w-full",
								style: { background: "radial-gradient(circle at 50% 100%, #7d263c 0%, #561727 60%, #3e0e1a 100%)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0",
								style: { background: "linear-gradient(to bottom right, rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(to bottom left, rgba(212,175,55,0.4) 1px, transparent 1px)" }
							})]
						})]
					})
				]
			}),
			!opening && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display absolute bottom-8 left-0 right-0 text-center text-xs tracking-[0.45em] text-[#8e4557] uppercase font-medium transition-opacity duration-300",
				style: { animation: "pulse 2.5s ease-in-out infinite" },
				children: "Tap the seal to open"
			})
		]
	});
}
var hero_poster_default = "/assets/hero-poster-DsEy2CIy.jpg";
var hero_loop_mp4_asset_default = {
	version: 1,
	asset_id: "62395fe0-f138-4011-8e26-8da4eebe7202",
	project_id: "04757c21-a9c0-4599-ae2a-c73bdf2dbf0d",
	url: "/__l5e/assets-v1/62395fe0-f138-4011-8e26-8da4eebe7202/hero-loop.mp4",
	original_filename: "hero-loop.mp4",
	size: 28165475,
	created_at: "2026-08-14T10:10:53Z"
};
var invite = {
	bride: {
		name: "Zara",
		parents: "Daughter of Mr. & Mrs. Pathan",
		education: "B.Tech, MBA",
		title: "Advocate, High Court"
	},
	groom: {
		name: "Veer",
		parents: "Son of Mr. & Mrs. Khan",
		education: "M.Tech, Phd",
		title: "Software Engineer"
	},
	welcome: "We are honored to welcome you to the Wedding ceremony of Veer & Zara as they begin their journey together in faith and love, we thank you for being part of this blessed occasion",
	weddingDate: "2026-06-30T10:30:00+05:30",
	dateLabel: "June 30, 2026",
	dayLabel: "Wednesday",
	timeline: [
		{
			title: "Guest Arrival",
			when: "Jun 30, 2026, 10:00 AM",
			note: "We warmly welcome you..!"
		},
		{
			title: "Wedding Ceremony",
			when: "Jun 30, 2026, 10:30 AM",
			note: "Your gracious presence is requested ❤"
		},
		{
			title: "Reception",
			when: "Jul 2, 2026, 7:30 PM",
			note: "Your gracious presence is requested at the Reception at 7:30 PM onwards."
		}
	],
	venue: {
		name: "The Taj Mahal Palace",
		address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
		mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Taj+Mahal+Palace+Colaba+Mumbai"
	},
	closing: "With love and gratitude, we await your blessings."
};
function HeroVideo() {
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => setOffset(window.scrollY));
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 h-full w-full object-cover",
				src: hero_loop_mp4_asset_default.url,
				poster: hero_poster_default,
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, oklch(0.3 0.05 300 / 0.35) 0%, transparent 35%, oklch(0.3 0.05 300 / 0.25) 70%, var(--background) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
				style: {
					transform: `translateY(${offset * .22}px)`,
					opacity: Math.max(0, 1 - offset / 620)
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg text-ivory/90",
						children: "❤"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script mt-2 max-w-xs text-xl leading-relaxed text-ivory/95 drop-shadow-lg sm:max-w-sm sm:text-2xl",
						children: "We are honored to welcome you to the Wedding ceremony of..."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-script gold-text text-6xl leading-none drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:text-8xl",
							children: invite.groom.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display mt-4 space-y-0.5 text-sm text-ivory/90",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: invite.groom.parents }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: invite.groom.education }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: invite.groom.title })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script my-4 text-3xl text-ivory/85",
						children: "&"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-script gold-text text-6xl leading-none drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:text-8xl",
						children: invite.bride.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display mt-4 space-y-0.5 text-sm text-ivory/90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: invite.bride.parents }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: invite.bride.education }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: invite.bride.title })
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center text-ivory/85",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[0.65rem] uppercase tracking-[0.5em]",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "mt-1 h-5 w-5",
					style: { animation: "soft-float 2s ease-in-out infinite" }
				})]
			})
		]
	});
}
var wedding_theme_mp3_asset_default = {
	version: 1,
	asset_id: "0af4b1cf-dc77-42b3-b733-2df30b232686",
	project_id: "04757c21-a9c0-4599-ae2a-c73bdf2dbf0d",
	url: "/__l5e/assets-v1/0af4b1cf-dc77-42b3-b733-2df30b232686/wedding-theme.mp3",
	r2_key: "a/v1/04757c21-a9c0-4599-ae2a-c73bdf2dbf0d/0af4b1cf-dc77-42b3-b733-2df30b232686/wedding-theme.mp3",
	original_filename: "wedding-theme.mp3",
	size: 512878,
	content_type: "audio/mpeg",
	created_at: "2026-08-14T10:11:06Z"
};
function MusicToggle({ started }) {
	const audioRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!started) return;
		const el = audioRef.current;
		if (!el) return;
		el.volume = .45;
		el.play().then(() => setPlaying(true), () => setPlaying(false));
	}, [started]);
	const toggle = () => {
		const el = audioRef.current;
		if (!el) return;
		if (el.paused) {
			el.volume = .45;
			el.play().then(() => setPlaying(true), () => setPlaying(false));
		} else {
			el.pause();
			setPlaying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
		ref: audioRef,
		src: wedding_theme_mp3_asset_default.url,
		loop: true,
		preload: "auto"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": playing ? "Mute music" : "Play music",
		className: "fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-card/80 text-primary shadow-[var(--shadow-soft)] backdrop-blur-md transition-transform hover:scale-105",
		children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-5 w-5" })
	})] });
}
var petals = Array.from({ length: 16 }, (_, i) => ({
	left: i * 61 % 100,
	size: 8 + i * 7 % 12,
	duration: 14 + i * 5 % 12,
	delay: -(i * 1.7),
	drift: (i % 5 - 2) * 4
}));
function PetalField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-30 overflow-hidden",
		"aria-hidden": "true",
		children: petals.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-0 block rounded-[100%_0_100%_0] bg-blush/70",
			style: {
				left: `${p.left}%`,
				width: p.size,
				height: p.size * .7,
				animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
				["--drift"]: `${p.drift}vw`
			}
		}, i))
	});
}
var SIZE = 300;
function icsFile() {
	const start = "20260630T050000Z";
	const body = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Veer and Zara//Wedding//EN",
		"BEGIN:VEVENT",
		`UID:veer-zara-${start}`,
		`DTSTAMP:${start}`,
		`DTSTART:${start}`,
		`DTEND:20260630T090000Z`,
		"SUMMARY:Wedding of Veer & Zara",
		`LOCATION:${invite.venue.name}, ${invite.venue.address}`,
		"DESCRIPTION:Your gracious presence is requested.",
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
	const blob = new Blob([body], { type: "text/calendar;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "veer-zara-wedding.ics";
	a.click();
	URL.revokeObjectURL(url);
}
function ScratchReveal() {
	const canvasRef = (0, import_react.useRef)(null);
	const drawing = (0, import_react.useRef)(false);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const grad = ctx.createLinearGradient(0, 0, SIZE, SIZE);
		grad.addColorStop(0, "#e6a6b3");
		grad.addColorStop(.5, "#c9788d");
		grad.addColorStop(1, "#b45c73");
		ctx.fillStyle = grad;
		ctx.fillRect(0, 0, SIZE, SIZE);
		ctx.globalAlpha = .25;
		for (let i = 0; i < 900; i++) {
			ctx.fillStyle = i % 2 ? "#ffffff" : "#8d4257";
			ctx.fillRect(Math.random() * SIZE, Math.random() * SIZE, 2, 2);
		}
		ctx.globalAlpha = 1;
		ctx.globalCompositeOperation = "destination-out";
	}, []);
	const scratch = (e) => {
		if (!drawing.current || revealed) return;
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;
		const rect = canvas.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width * SIZE;
		const y = (e.clientY - rect.top) / rect.height * SIZE;
		ctx.beginPath();
		ctx.arc(x, y, 26, 0, Math.PI * 2);
		ctx.fill();
		const data = ctx.getImageData(0, 0, SIZE, SIZE).data;
		let clear = 0;
		for (let i = 3; i < data.length; i += 64) if (data[i] === 0) clear++;
		if (clear / (data.length / 64) > .5) setRevealed(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[280px] w-[280px]",
				style: { clipPath: "path('M140 262 C 40 190, 4 132, 4 92 C 4 44, 40 14, 78 14 C 106 14, 130 30, 140 52 C 150 30, 174 14, 202 14 C 240 14, 276 44, 276 92 C 276 132, 240 190, 140 262 Z')" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 flex flex-col items-center justify-center bg-[oklch(0.985_0.01_8)] pt-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-semibold text-primary",
							children: invite.dateLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-3xl text-primary/80",
							children: invite.dayLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: "10:30 AM"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					width: SIZE,
					height: SIZE,
					className: "absolute inset-0 h-full w-full touch-none transition-opacity duration-700",
					style: {
						opacity: revealed ? 0 : 1,
						cursor: "grab"
					},
					onPointerDown: (e) => {
						drawing.current = true;
						e.currentTarget.setPointerCapture(e.pointerId);
						scratch(e);
					},
					onPointerMove: scratch,
					onPointerUp: () => drawing.current = false,
					onPointerLeave: () => drawing.current = false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: revealed ? "Save the date" : "Scratch the heart"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: icsFile,
				className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, { className: "h-4 w-4" }), "Save the date"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-2 text-xs text-muted-foreground",
				children: "Add this event to your calendar"
			})
		]
	});
}
var slides = [
	{
		src: "/assets/gallery-1-BpDpkJgu.jpg",
		alt: "White roses and candles on a draped wedding table"
	},
	{
		src: "/assets/gallery-2-BOlv-kAb.jpg",
		alt: "Floral wedding mandap with white drapes and candles"
	},
	{
		src: "/assets/gallery-3-CTf4--7C.jpg",
		alt: "Wedding table setting with gold cutlery and rose petals"
	},
	{
		src: "/assets/gallery-4-XmDkg9fw.jpg",
		alt: "Garden wedding aisle with lanterns and rose petals"
	}
];
function Gallery() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const startX = (0, import_react.useRef)(null);
	const go = (next) => setIndex((next + slides.length) % slides.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]",
			onPointerDown: (e) => startX.current = e.clientX,
			onPointerUp: (e) => {
				if (startX.current === null) return;
				const dx = e.clientX - startX.current;
				if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
				startX.current = null;
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
				style: { transform: `translateX(-${index * 100}%)` },
				children: slides.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.src,
					alt: s.alt,
					width: 1400,
					height: 900,
					loading: "lazy",
					className: "aspect-[14/9] w-full shrink-0 object-cover"
				}, s.src))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex items-center justify-center gap-2",
			children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `Show photo ${i + 1}`,
				onClick: () => go(i),
				className: `h-1.5 rounded-full transition-all ${i === index ? "w-7 bg-primary" : "w-1.5 bg-primary/30"}`
			}, s.src))
		})]
	});
}
function diff(target) {
	const ms = Math.max(0, target - Date.now());
	return {
		days: Math.floor(ms / 864e5),
		hours: Math.floor(ms / 36e5 % 24),
		minutes: Math.floor(ms / 6e4 % 60),
		seconds: Math.floor(ms / 1e3 % 60)
	};
}
function Countdown() {
	const target = new Date(invite.weddingDate).getTime();
	const [time, setTime] = (0, import_react.useState)(() => diff(target));
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setTime(diff(target)), 1e3);
		return () => window.clearInterval(id);
	}, [target]);
	const cells = [
		["Days", time.days],
		["Hours", time.hours],
		["Minutes", time.minutes],
		["Seconds", time.seconds]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap justify-center gap-3 sm:gap-4",
		children: cells.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-[72px] rounded-xl bg-blush/60 py-4 text-center shadow-[var(--shadow-soft)] sm:w-[84px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-3xl font-semibold tabular-nums text-primary sm:text-4xl",
				children: String(value).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground",
				children: label
			})]
		}, label))
	});
}
function useReveal(threshold = .18) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [threshold]);
	return {
		ref,
		shown
	};
}
function Reveal({ children, delay = 0, className = "" }) {
	const { ref, shown } = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `${shown ? "reveal-in" : "reveal-up"} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function Divider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-40 items-center justify-center gap-3 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gradient-to-r from-transparent to-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-primary",
				children: "❤"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-gradient-to-l from-transparent to-gold" })
		]
	});
}
function SectionTitle({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "font-script text-center text-4xl leading-tight text-primary sm:text-5xl",
		children
	});
}
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "mx-auto max-w-md px-6",
		children: invite.timeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * 120,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative border-l border-primary/25 pb-8 pl-6 last:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary shadow-[var(--shadow-gold)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-primary",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-foreground/80",
						children: item.when
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mt-1 text-sm text-muted-foreground",
						children: item.note
					})
				]
			})
		}, item.title))
	});
}
function Venue() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg font-semibold text-foreground",
				children: invite.venue.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display mt-1 text-sm text-muted-foreground",
				children: invite.venue.address
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 240 90",
				className: "mx-auto mt-6 w-64 text-primary/25",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.5",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 88V44h40v44M180 88V44h40v44" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 44a10 10 0 0 1 20 0M200 44a10 10 0 0 1 20 0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M70 88V34h100v54" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M90 88V56a30 30 0 0 1 60 0v32" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 34c-16 0-26-12-26-24 0 0 10 8 26 8s26-8 26-8c0 12-10 24-26 24z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 10V2" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: invite.venue.mapUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), "Open in maps"]
			})
		]
	});
}
function Index() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvelopeGate, { onOpen: () => setOpened(true) }),
			opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PetalField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicToggle, { started: opened }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVideo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-script mx-auto max-w-2xl text-center text-2xl leading-relaxed text-primary/90 sm:text-3xl",
						children: [
							invite.welcome,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-blush",
								children: "❤"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Scratch to Reveal" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScratchReveal, {})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-[var(--gradient-blush)] py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Counting Down to Forever" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-[var(--gradient-blush)] px-6 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mx-auto h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Program Timeline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mx-auto h-6 w-6 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Venue" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Venue, {})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-[var(--gradient-blush)] px-6 py-20 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-script text-3xl text-primary",
						children: [
							invite.groom.name,
							" & ",
							invite.bride.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mx-auto max-w-md text-sm text-muted-foreground",
						children: invite.closing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mt-6 text-[0.65rem] uppercase tracking-[0.4em] text-primary/60",
						children: "30 . 06 . 2026"
					})
				] })
			})
		]
	});
}
//#endregion
export { Index as component };
