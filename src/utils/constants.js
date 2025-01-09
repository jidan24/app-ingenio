//Navbar
const navItems = [
	{ name: 'Ingenio Store', slug: '/store' },
	{ name: 'Akses Officials', slug: '/officials' },
	{ name: 'Akses Tutor', slug: '/tutor' },
	{ name: 'Login', slug: '/login' },
];

export { navItems };

//card store page
const cardItems = [
	{
		id: 1,
		image: '/images/red.png',
		popupImages: ['/images/red.png', '/images/red-belakang.png'],
		title: 'Modul UKMPPD CBT Ingenio Indonesia: Ilmu Penyakit Dalam, Ilmu Penyakit Telinga, Hidung, Tenggorok dan Kepala-Leher',
	},
	{
		id: 2,
		image: '/images/blue.png',
		popupImages: ['/images/blue.png', '/images/blue-belakang.png'],
		title: 'Modul UKMPPD CBT Ingenio Indonesia: Ilmu Bedah, Ilmu Kesehatan Mata',
	},
	{
		id: 3,
		image: '/images/brown.png',
		popupImages: ['/images/brown.png', '/images/brown-belakang.png'],
		title: 'Modul UKMPPD CBT Ingenio Indonesia: Obstetri dan Ginekologi, Ilmu Kesehatan Jiwa',
	},
	{
		id: 4,
		image: '/images/green.png',
		popupImages: ['/images/green.png', '/images/green-belakang.png'],
		title: 'Modul UKMPPD CBT Ingenio Indonesia: Ilmu Kesehatan Anak, Neurologi',
	},
	{
		id: 5,
		image: '/images/purple.png',
		popupImages: ['/images/purple.png', '/images/purple-belakang.png'],
		title: 'Modul UKMPPD CBT Ingenio Indonesia: Dematovenereologi, Hukum Kedokteran dan Etik Kedokteran',
	},
	{
		id: 6,
		image: '/images/yellow.png',
		popupImages: ['/images/yellow.png', '/images/yellow-belakang.png'],
		title: 'Modul UKMPPD CBT Ingenio Indonesia: Kardiologi, Pulmonologi, Ilmu Kesehatan Masyarakat',
	},
	{
		id: 7,
		image: '/images/osce.png',
		popupImages: ['/images/osce.png', '/images/osce-belakang.png'],
		title: 'Modul Checklist UKMPPD OSCE Ingenio Indonesia',
	},
];
export { cardItems };

//Navbar store page
const navStore = [{ name: 'Catalog', slug: '#catalog' }];
export { navStore };

// Administrasi Bimbingan
const accordionData = [
	{
		title: 'ADMINISTRASI BIMBINGAN',
		subItems: [
			{
				title: 'PROGRAM PREKLINIK INGENIO INDONESIA',
				subSubItems: [
					{
						title: 'REGIONAL MALANG',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL MALANG',
								link: 'https://drive.google.com/drive/u/0/folders/1vPLCPvWgQqnYDglk_voo8rsEmmfvS3LP',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL MALANG',
								link: 'https://drive.google.com/drive/u/0/folders/1qyMpRJNZqRAt7ItpkH8rmE7TcJYnT2KO',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL MALANG',
								link: 'https://drive.google.com/drive/u/0/folders/1NNKoZI5ad4qd7a2P2IbVg_NCq--iIls3',
							},
						],
					},
					{
						title: 'REGIONAL BALI',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL BALI',
								link: 'https://drive.google.com/drive/u/0/folders/1dMsCoyuAjvEjgfcdS-TELHmDd_j9jamW',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL BALI',
								link: 'https://drive.google.com/drive/u/0/folders/1ykODuVdI7_SrqUJxh-oPKxwXlsF1-acK',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL BALI',
								link: 'https://drive.google.com/drive/u/0/folders/1xC9UwjUqCJjFDXuEPoteU-QbFkKl2tYI',
							},
						],
					},
					{
						title: 'REGIONAL SURABAYA',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/u/0/folders/1brTq_1PyaXrn9u4U87Uhlx-1DkZuEj6n',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/u/0/folders/1QQ9A41RW1c4_F-rKxTjdXEV1YCiV-Bsz',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/u/0/folders/1Kx0UJmZkT8Kdizrjh6DOL_Qd_cQ7wQ5Q',
							},
						],
					},
					{
						title: 'REGIONAL JAKARTA',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/u/0/folders/1BqDyOf4_A636dCbDfAXhV2DNqufRYftm',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/u/0/folders/1ioEVDbxtY1J116cGh5yvUKr45EBDo4XF',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/u/0/folders/1Xrk7eKpAHGYHZO5bWjTZg6LQUXEgVLkM',
							},
						],
					},
				],
				content: [
					{
						text: 'REKAPITULASI PESERTA DAN KELAS PREKLINIK DAN DOKTER MUDA INGENIO INDONESIA',
						link: 'https://docs.google.com/spreadsheets/d/1nb3zauFk9Zkhlovet2Rhhz2MN5s4IFUiqLQMoPWQeAg/edit?gid=1875558464#gid=1875558464',
					},
					{
						text: 'REKAPITULASI HONORARIUM TUTOR PREKLINIK DAN DOKTER MUDA',
						link: 'https://drive.google.com/drive/u/0/folders/1DUQXvI1G2PYLg_SpWensxrhlVGQl24vh',
					},
				],
			},
			{
				title: 'PROGRAM DOKTER MUDA INGENIO INDONESIA',
				subSubItems: [
					{
						title: 'REGIONAL MALANG',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL MALANG',
								link: 'https://drive.google.com/drive/u/0/folders/1vPLCPvWgQqnYDglk_voo8rsEmmfvS3LP',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL MALANG',
								link: 'https://drive.google.com/drive/u/0/folders/1qyMpRJNZqRAt7ItpkH8rmE7TcJYnT2KO',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL MALANG',
								link: 'https://drive.google.com/drive/u/0/folders/1NNKoZI5ad4qd7a2P2IbVg_NCq--iIls3',
							},
						],
					},
					{
						title: 'REGIONAL BALI',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL BALI',
								link: 'https://drive.google.com/drive/u/0/folders/1dMsCoyuAjvEjgfcdS-TELHmDd_j9jamW',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL BALI',
								link: 'https://drive.google.com/drive/u/0/folders/1ykODuVdI7_SrqUJxh-oPKxwXlsF1-acK',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL BALI',
								link: 'https://drive.google.com/drive/u/0/folders/1xC9UwjUqCJjFDXuEPoteU-QbFkKl2tYI',
							},
						],
					},
					{
						title: 'REGIONAL SURABAYA',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/u/0/folders/1brTq_1PyaXrn9u4U87Uhlx-1DkZuEj6n',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/u/0/folders/1QQ9A41RW1c4_F-rKxTjdXEV1YCiV-Bsz',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/u/0/folders/1Kx0UJmZkT8Kdizrjh6DOL_Qd_cQ7wQ5Q',
							},
						],
					},
					{
						title: 'REGIONAL JAKARTA',
						content: [
							{
								text: 'DATA DASAR PESERTA PREKLINIK REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/u/0/folders/1BqDyOf4_A636dCbDfAXhV2DNqufRYftm',
							},
							{
								text: 'ABSEN PESERTA PREKLINIK REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/u/0/folders/1ioEVDbxtY1J116cGh5yvUKr45EBDo4XF',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR PREKLINIK REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/u/0/folders/1Xrk7eKpAHGYHZO5bWjTZg6LQUXEgVLkM',
							},
						],
					},
				],
				content: [
					{
						text: 'REKAPITULASI PESERTA DAN KELAS PREKLINIK DAN DOKTER MUDA INGENIO INDONESIA',
						link: 'https://docs.google.com/spreadsheets/d/1nb3zauFk9Zkhlovet2Rhhz2MN5s4IFUiqLQMoPWQeAg/edit?gid=1875558464#gid=1875558464',
					},
					{
						text: 'REKAPITULASI HONORARIUM TUTOR PREKLINIK DAN DOKTER MUDA',
						link: 'https://drive.google.com/drive/u/0/folders/1DUQXvI1G2PYLg_SpWensxrhlVGQl24vh',
					},
				],
			},
			{
				title: 'PROGRAM UKMPPD INGENIO INDONESIA',
				subSubItems: [
					{
						title: 'REGIONAL MALANG',
						content: [
							{
								text: 'DATA DASAR PESERTA UKMPPD REGIONAL MALANG',
								link: 'https://drive.google.com/drive/u/0/folders/1cP5c-Wta7VOY1oPmUsyLYpd4_4qjAaZe',
							},
							{
								text: 'ABSEN PESERTA UKMPPD REGIONAL MALANG',
								link: 'https://drive.google.com/drive/folders/188v_ixyJSAfwpFDu-KMwGWzgHVqTBh5J?usp=share_link',
							},
							{
								text: 'REKAPITULASI PESERTA MUNDUR BATCH',
								link: 'https://drive.google.com/drive/folders/1pKHL4xWJwZtwKPoLCLLKpD2CdEA_7vnM?usp=sharing',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR UKMPPD REGIONAL MALANG',
								link: 'https://drive.google.com/drive/folders/1PKVZvAAmjYUzggA6oAS96pinBU6X4Qls?usp=sharing',
							},
						],
					},
					{
						title: 'REGIONAL BALI',
						content: [
							{
								text: 'DATA DASAR PESERTA UKMPPD REGIONAL BALI',
								link: 'https://drive.google.com/drive/folders/1-EljecVKUtqDjLp7PgfFzQyBhQQbQE6R?usp=sharing',
							},
							{
								text: 'ABSEN PESERTA UKMPPD REGIONAL BALI',
								link: 'https://drive.google.com/drive/folders/1AE_YyUAgTpVJPiBBAH2MXZJrGl8IuZ9q?usp=sharing',
							},
							{
								text: 'REKAPITULASI PESERTA MUNDUR BATCH',
								link: 'https://drive.google.com/drive/folders/1pKHL4xWJwZtwKPoLCLLKpD2CdEA_7vnM?usp=share_link',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR UKMPPD REGIONAL BALI',
								link: 'https://drive.google.com/drive/u/0/folders/1AE_YyUAgTpVJPiBBAH2MXZJrGl8IuZ9q',
							},
						],
					},
					{
						title: 'REGIONAL SURABAYA',
						content: [
							{
								text: 'DATA DASAR PESERTA UKMPPD REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/u/0/folders/13_K0sbGVta8iN0tV96iMU0hXdBeTBdjS',
							},
							{
								text: 'ABSEN PESERTA UKMPPD REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/folders/1So_DvqxL8mgJZPipbBSSTxD06fi4glOe?usp=sharing',
							},
							{
								text: 'REKAPITULASI PESERTA MUNDUR BATCH',
								link: 'https://drive.google.com/drive/folders/1pKHL4xWJwZtwKPoLCLLKpD2CdEA_7vnM?usp=sharing',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR UKMPPD REGIONAL SURABAYA',
								link: 'https://drive.google.com/drive/folders/1Gan3RZcKZjFTT65jgwB9aNCG-ZRQLW2j?usp=sharing',
							},
						],
					},
					{
						title: 'REGIONAL JAKARTA',
						content: [
							{
								text: 'DATA DASAR PESERTA UKMPPD REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/folders/1ZGZLxLq3FbU6TQAiL1u6l_29lTZisHWp',
							},
							{
								text: 'ABSEN PESERTA UKMPPD REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/folders/1woz6ncm0sTksSWp2uHcNtf76FN2JrhJU',
							},
							{
								text: 'REKAPITULASI PESERTA MUNDUR BATCH',
								link: 'https://drive.google.com/drive/folders/1pKHL4xWJwZtwKPoLCLLKpD2CdEA_7vnM?usp=sharing',
							},
							{
								text: 'ABSENSI DAN JURNAL MENGAJAR UKMPPD REGIONAL JAKARTA',
								link: 'https://drive.google.com/drive/folders/11zwJ7Ioidlpbm-9FYk5W-Uv3pwvvVvSY',
							},
						],
					},
				],
				content: [
					{
						text: 'REKAPITULASI PESERTA DAN KELAS UKMPPD INGENIO INDONESIA',
						link: 'https://drive.google.com/drive/u/0/folders/1y3t9ohmT2tEHTIA7bTY7hEhwFepZnVw6',
					},
					{
						text: 'REKAPITULASI HONORARIUM TUTOR UKMPPD',
						link: 'https://drive.google.com/drive/u/0/folders/1RnscT2c6_Mu5Lpw5rv1RAw7aW6IStZ65',
					},
					{
						text: 'REQUEST JADWAL BIMBINGAN UKMPPD',
						link: 'https://drive.google.com/drive/u/0/folders/13paiUAsRdDlO19Kw78d7Q9x_fNoHzdRD',
					},
					{
						text: 'PLOTTING TUTOR UKMPPD',
						link: 'https://drive.google.com/drive/folders/1U2zhEWu4C1-3Zsv2E28MRndyfWQ46ktO?usp=sharing',
					},
					{
						text: 'PLOTTING JADWAL UKMPPD',
						link: 'https://drive.google.com/drive/folders/1zoPxO8rt2is-GjwjTiJXTtL8vw4Cp2hR?usp=sharing',
					},
				],
			},
			{
				title: 'PROGRAM UKMP2DG INGENIO INDONESIA',
				content: [
					{
						text: 'DATA PESERTA UKMP2DG INGENIO INDONESIA',
						link: 'https://drive.google.com/drive/folders/18iFnEcK1DDXjaEd0nj-S_ThGSEHr9VNf',
					},
					{
						text: 'ABSENSI PESERTA UKMP2DG INGENIO INDONESIA ',
						link: 'https://drive.google.com/drive/folders/1tX-nH9-yopXx7dZTzrTgsR9xbNYq6SiX',
					},
					{
						text: 'ABSENSI DAN JURNAL MENGAJAR TUTOR UKMP2DG',
						link: 'https://drive.google.com/drive/folders/1MmfB_ui7GLv9DaSU__HpDgkSVuq8qyjG',
					},
				],
			},
			{
				title: 'PROGRAM KEBIDANAN INGENIO INDONESIA',
				content: [
					{
						text: 'DATA PESERTA KEBIDANAN INGENIO INDONESIA',
						link: 'https://drive.google.com/drive/folders/1uCBoruqScQukmC-Pj00k5JwCG5tNkFX3?usp=sharing',
					},
					{
						text: 'ABSENSI PESERTA KEBIDANAN INGENIO INDONESIA ',
						link: 'https://drive.google.com/drive/folders/1Jey7nLtMqNNE8hUMWy09shydE-0FGKVn?usp=sharing',
					},
					{
						text: 'ABSENSI DAN JURNAL MENGAJAR TUTOR KEBIDANAN',
						link: 'https://drive.google.com/drive/folders/1zIRGaDXp-Yw0M6V8wR6PY1eNitq1SKdt?usp=sharing',
					},
				],
			},
		],
	},
];
export { accordionData };

//link officials
const tapLink = [
	{
		text: 'Qontak',
		url: 'https://account.mekari.com/users/sign_in?client_id=3ozGzJjjJrERyXUG&return_to=L2F1dGgvP2NsaWVudF9pZD0zb3pHekpqakpyRVJ5WFVHJnJlc3BvbnNlX3R5cGU9Y29kZSZzY29wZT1zc286cHJvZmlsZQ%3D%3D',
	},
	{
		text: 'ZOOM INGENIO INDONESIA',
		url: 'https://docs.google.com/spreadsheets/d/1meuww1-fw-T_sGJI-1HASZw-7gsNVit3j8EP4jSzojI/edit?gid=127893873#gid=127893873',
	},
	{ text: 'GENESIS LION PARCEL', url: 'https://genesis.lionparcel.com/' },
	{
		text: 'LAPORAN EVALUASI BULANAN',
		url: 'https://docs.google.com/forms/d/e/1FAIpQLSd1WwDK-H0q46jbnMnTLbKnJ9w9S0pffQh5J7jqSb8zI4ayMQ/viewform',
	},
	{
		text: 'FORMULIR ABSENSI RAPAT INGENIO INDONESIA',
		url: 'https://docs.google.com/forms/d/e/1FAIpQLSfbSbj-QESJNp8zrVkn7AoZ2nqkSAV5gK-51zcHVbyg2-EBtQ/viewform',
	},
];

export { tapLink };

//Tryout
const accordionData2 = [
	{
		title: 'Tryout',
		content: [
			{
				text: 'Data Website Try Out Khusus Peserta Kerjasama / Peserta Berkebutuhan Khusus',
				link: 'https://www.e-ujian.com/web/index',
			},
			{
				text: 'Absen Website Try Out Khusus Peserta Kerjasama / Peserta Berkebutuhan Khusus',
				link: 'https://tryout.ingenioindonesia.id/',
			},
		],
	},
];
export { accordionData2 };

//Preklinik accordion
const accordionData3 = [
	{
		title: 'Layanan Bimbingan Preklinik',
		content: [
			{
				text: 'Permintaan slide Preklinik Ingenio Indonesia',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLScwdu3F7r1blMhV0pm1aYgHrQYXeJXHcURabHLNdDj5xjJS5A/viewform',
			},
			{
				text: 'Malang-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSerlDLKeojgJVBOYQSNQJnSODS26XjuTFF8Y2yDWcyCbne-Xw/viewform',
			},
			{
				text: 'Bali-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLScHgZNPwSEsojqHh2rlN9jrVxa44kK9Jb8AIgJsoHKSTxy_kw/viewform',
			},
			{
				text: 'Surabaya-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSeeqwaD9HuOlrP5VWvQFY49DRDSY58_VpJ2NOsoynLLtsOWOQ/viewform',
			},
			{
				text: 'Jakarta-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSd3-dWOaEHIwIHbEXjniKaACWfK8AO9AGv_2GEg7eqn55h_cg/viewform',
			},
			{
				text: 'Konsultasi dengan tim akademik',
				link: 'https://api.whatsapp.com/send/?phone=6281358889123&text&type=phone_number&app_absent=0',
			},
		],
	},
];
export { accordionData3 };

//Doktermuda accordion
const accordionData4 = [
	{
		title: 'Layanan Bimbingan Dokter Muda',
		content: [
			{
				text: 'Malang-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSd2EZDwS3YKvXaTaIk5EfzpO1haCVyLaKO-WABA06ENTZgpJQ/viewform',
			},
			{
				text: 'Bali-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSedHs5-ZhQC-pkhTXmZMGhsZooJEo8QGCxyWNIxwxJhkis5tA/viewform',
			},
			{
				text: 'Surabaya-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSf0YGEOe2xDqr14zxKTXx7w3L29hWYyCvGpvLWQF6iXyBcqbw/viewform',
			},
			{
				text: 'Jakarta-Absensi dan jurnal mengajar tutor preklinik',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSdV6j6k7dNXWbCSRlhO9YVx7iev3pzXyXQkguT8Jq8pEc8cLw/viewform',
			},
			{
				text: 'Konsultasi dengan tim akademik',
				link: 'https://api.whatsapp.com/send/?phone=6281358889123&text&type=phone_number&app_absent=0',
			},
		],
	},
];
export { accordionData4 };

//JADWAL CBT UKMPPD ACCORDION
const accordionData5 = [
	{
		title: 'INPUT JADWAL BIMBINGAN CBT UKMPPD',
		content: [
			{
				text: 'INPUT JADWAL FASE INTENSIF DAN FASE CEPAT',
				link: 'https://docs.google.com/spreadsheets/d/12uJPC7Nk2gElIKy6YJ9ee60fw8OycWQWk6aldYaS92c/edit?gid=710273041#gid=710273041',
			},
			{
				text: 'INPUT FASE JADWAL REVIEW',
				link: 'https://docs.google.com/spreadsheets/d/1tf3EURf-csgdDPbUXzrKFxdyWPuBW7liu33wsP5yg00/edit?gid=988120807#gid=988120807',
			},
			{
				text: 'KONSULTASI DENGAN TIM ADMIN TERKAIT JADWAL',
				link: 'https://api.whatsapp.com/send/?phone=6281358889123&text&type=phone_number&app_absent=0',
			},
		],
	},
];
export { accordionData5 };

//JADWAL BIMBINGAN OSCE ACCORDION
const accordionData6 = [
	{
		title: 'INPUT JADWAL BIMBINGAN OSCE',
		content: [
			{
				text: 'Input Input Jadwal Bimbingan OSCE',
				link: 'https://docs.google.com/spreadsheets/d/1mEhKVJQOrdDiK8n-p0bqzurG2Vi-tNxQBKsT42Fvn2g/edit?gid=988120807#gid=988120807',
			},
			{
				text: 'Konsultasi Dengan Admin Terkait Jadwal',
				link: 'https://api.whatsapp.com/send/?phone=6281358889123&text&type=phone_number&app_absent=0',
			},
		],
	},
];
export { accordionData6 };

//INPUT JURNAL MENGAJAR ACCORDION
const accordionData7 = [
	{
		title: 'INPUT JURNAL MENGAJAR',
		content: [
			{
				text: 'Regional Malang',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLScRZRTKVAxhmmB5AbSMV7YO68dnPlvbf1YClN3PpjTtPwNYGg/viewform',
			},
			{
				text: 'Regional Jakarta',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSdcJs0uTKFLXByjaqHS67t5yrw9BguRe1lDp1dQticadI5BVw/viewform',
			},
			{
				text: 'Regional Surabaya',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSdDeTBfYiq2tc5HI26iThKzca-3tH_C22SeOkas4SfyAxag2g/viewform',
			},
			{
				text: 'Regional Bali',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSfJEOLR9B5Onj9shn_iSbqb1ZrrwFHm93M6E__3bw-cRel8FA/viewform',
			},
		],
	},
];
export { accordionData7 };

//PREKLINIK KEDOKTERAN GIGI
const accordionData8 = [
	{
		title: 'LAYANAN BIMBINGAN PREKLINIK KEDOKTERAN GIGI DAN UKMP2DG',
		content: [
			{
				text: 'UKMP2DG - ABSENSI DAN JURNAL MENGAJAR TUTOR UKMP2DG',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLScNJ90LRl2NdfqhDlu1T_PuWvKFCJRcD4eVT0ccSKVHrICIBQ/viewform',
			},
			{
				text: 'KONSULTASI DENGAN TIM AKADEMIK',
				link: 'https://api.whatsapp.com/send/?phone=6281358889123&text&type=phone_number&app_absent=0',
			},
		],
	},
];
export { accordionData8 };

//PREKLINIK KEBIDANAN
const accordionData9 = [
	{
		title: 'LAYANAN BIMBINGAN PREKLINIK KEBIDANAN DAN UKOM KEBIDANAN',
		content: [
			{
				text: 'ABSENSI JURNAL MENGAJARA TUTOR PREKLINIK DAN UJIAN KOMPETENSI KEBIDANAN',
				link: 'https://docs.google.com/forms/d/e/1FAIpQLSfiPcQqBGeIP-8CJvxu9cCmCd_0oRumCoteaW_e0fcFpBU4og/viewform',
			},
			{
				text: 'KONSULTASI DENGAN TIM AKADEMIK',
				link: 'https://api.whatsapp.com/send/?phone=6281358889123&text&type=phone_number&app_absent=0',
			},
		],
	},
];
export { accordionData9 };
