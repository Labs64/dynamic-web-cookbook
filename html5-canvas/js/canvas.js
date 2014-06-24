// JavaScript Document

window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

function initBalls() {
    balls = [];

    var blue = '#89cff0';
    var red = '#ff0000';
    var yellow = '#ffd700';
    var green = '#749b3d';
    var grow = '#9c9c9c';

    // Explorer (38)
    balls.push(new Ball(34, 342, 0, 0, red));
    balls.push(new Ball(48, 342, 0, 0, red));
    balls.push(new Ball(62, 342, 0, 0, red));
    balls.push(new Ball(76, 342, 0, 0, red));
    balls.push(new Ball(90, 342, 0, 0, red));
    balls.push(new Ball(105, 342, 0, 0, red));
    balls.push(new Ball(119, 342, 0, 0, red));
    balls.push(new Ball(133, 342, 0, 0, red));
    balls.push(new Ball(147, 342, 0, 0, red));
    balls.push(new Ball(161, 342, 0, 0, red));

    balls.push(new Ball(35, 327, 0, 0, red));
    balls.push(new Ball(49, 327, 0, 0, red));
    balls.push(new Ball(63, 327, 0, 0, red));
    balls.push(new Ball(77, 327, 0, 0, red));
    balls.push(new Ball(91, 327, 0, 0, red));
    balls.push(new Ball(106, 327, 0, 0, red));
    balls.push(new Ball(120, 327, 0, 0, red));
    balls.push(new Ball(134, 327, 0, 0, red));
    balls.push(new Ball(149, 327, 0, 0, red));
    balls.push(new Ball(163, 327, 0, 0, red));

    balls.push(new Ball(37, 312, 0, 0, red));
    balls.push(new Ball(51, 311, 0, 0, red));
    balls.push(new Ball(65, 311, 0, 0, red));
    balls.push(new Ball(80, 311, 0, 0, red));
    balls.push(new Ball(94, 311, 0, 0, red));
    balls.push(new Ball(108, 311, 0, 0, red));
    balls.push(new Ball(123, 312, 0, 0, red));
    balls.push(new Ball(137, 312, 0, 0, red));
    balls.push(new Ball(152, 312, 0, 0, red));
    balls.push(new Ball(167, 312, 0, 0, red));

    balls.push(new Ball(39, 296, 0, 0, red));
    balls.push(new Ball(54, 296, 0, 0, red));
    balls.push(new Ball(68, 296, 0, 0, red));
    balls.push(new Ball(83, 296, 0, 0, red));
    balls.push(new Ball(98, 296, 0, 0, red));
    balls.push(new Ball(113, 296, 0, 0, red));
    balls.push(new Ball(128, 297, 0, 0, red));
    balls.push(new Ball(142, 297, 0, 0, red));

    // Chrome(201)

    balls.push(new Ball(142, 297, 0, 0, yellow));
    balls.push(new Ball(157, 297, 0, 0, yellow));
    balls.push(new Ball(173, 297, 0, 0, yellow));//3

    balls.push(new Ball(43, 283, 0, 0, yellow));
    balls.push(new Ball(58, 281, 0, 0, yellow));
    balls.push(new Ball(73, 281, 0, 0, yellow));
    balls.push(new Ball(88, 281, 0, 0, yellow));
    balls.push(new Ball(103, 281, 0, 0, yellow));
    balls.push(new Ball(118, 281, 0, 0, yellow));
    balls.push(new Ball(133, 283, 0, 0, yellow));
    balls.push(new Ball(149, 283, 0, 0, yellow));
    balls.push(new Ball(164, 283, 0, 0, yellow));
    balls.push(new Ball(181, 283, 0, 0, yellow));//13

    balls.push(new Ball(48, 268, 0, 0, yellow));
    balls.push(new Ball(63, 266, 0, 0, yellow));
    balls.push(new Ball(77, 266, 0, 0, yellow));
    balls.push(new Ball(94, 266, 0, 0, yellow));
    balls.push(new Ball(109, 267, 0, 0, yellow));
    balls.push(new Ball(125, 267, 0, 0, yellow));
    balls.push(new Ball(140, 269, 0, 0, yellow));
    balls.push(new Ball(156, 269, 0, 0, yellow));
    balls.push(new Ball(173, 270, 0, 0, yellow));
    balls.push(new Ball(191, 272, 0, 0, yellow));//23

    balls.push(new Ball(53, 254, 0, 0, yellow));
    balls.push(new Ball(69, 252, 0, 0, yellow));
    balls.push(new Ball(85, 252, 0, 0, yellow));
    balls.push(new Ball(101, 252, 0, 0, yellow));
    balls.push(new Ball(117, 253, 0, 0, yellow));
    balls.push(new Ball(133, 253, 0, 0, yellow));
    balls.push(new Ball(148, 256, 0, 0, yellow));
    balls.push(new Ball(165, 257, 0, 0, yellow));
    balls.push(new Ball(183, 259, 0, 0, yellow));
    balls.push(new Ball(201, 261, 0, 0, yellow));//33

    balls.push(new Ball(59, 240, 0, 0, yellow));
    balls.push(new Ball(77, 238, 0, 0, yellow));
    balls.push(new Ball(92, 238, 0, 0, yellow));
    balls.push(new Ball(109, 239, 0, 0, yellow));
    balls.push(new Ball(126, 240, 0, 0, yellow));
    balls.push(new Ball(143, 240, 0, 0, yellow));
    balls.push(new Ball(158, 244, 0, 0, yellow));
    balls.push(new Ball(176, 246, 0, 0, yellow));
    balls.push(new Ball(195, 248, 0, 0, yellow));
    balls.push(new Ball(215, 251, 0, 0, yellow));//43

    balls.push(new Ball(66, 227, 0, 0, yellow));
    balls.push(new Ball(84, 225, 0, 0, yellow));
    balls.push(new Ball(101, 226, 0, 0, yellow));
    balls.push(new Ball(118, 226, 0, 0, yellow));
    balls.push(new Ball(135, 227, 0, 0, yellow));
    balls.push(new Ball(153, 229, 0, 0, yellow));
    balls.push(new Ball(169, 233, 0, 0, yellow));
    balls.push(new Ball(188, 236, 0, 0, yellow));
    balls.push(new Ball(208, 239, 0, 0, yellow));
    balls.push(new Ball(228, 244, 0, 0, yellow));//53

    balls.push(new Ball(75, 214, 0, 0, yellow));
    balls.push(new Ball(93, 212, 0, 0, yellow));
    balls.push(new Ball(110, 213, 0, 0, yellow));
    balls.push(new Ball(128, 214, 0, 0, yellow));
    balls.push(new Ball(146, 216, 0, 0, yellow));
    balls.push(new Ball(165, 218, 0, 0, yellow));
    balls.push(new Ball(182, 223, 0, 0, yellow));
    balls.push(new Ball(201, 227, 0, 0, yellow));
    balls.push(new Ball(221, 232, 0, 0, yellow));
    balls.push(new Ball(243, 239, 0, 0, yellow));//63

    balls.push(new Ball(83, 202, 0, 0, yellow));
    balls.push(new Ball(103, 200, 0, 0, yellow));
    balls.push(new Ball(121, 201, 0, 0, yellow));
    balls.push(new Ball(139, 202, 0, 0, yellow));
    balls.push(new Ball(132, 190, 0, 0, yellow));
    balls.push(new Ball(113, 189, 0, 0, yellow));
    balls.push(new Ball(93, 190, 0, 0, yellow));
    balls.push(new Ball(104, 179, 0, 0, yellow));
    balls.push(new Ball(125, 178, 0, 0, yellow));
    balls.push(new Ball(114, 168, 0, 0, yellow));//73

    balls.push(new Ball(126, 158, 0, 0, yellow));
    balls.push(new Ball(137, 168, 0, 0, yellow));
    balls.push(new Ball(144, 180, 0, 0, yellow));
    balls.push(new Ball(151, 193, 0, 0, yellow));
    balls.push(new Ball(158, 207, 0, 0, yellow));
    balls.push(new Ball(177, 209, 0, 0, yellow));
    balls.push(new Ball(193, 215, 0, 0, yellow));
    balls.push(new Ball(214, 220, 0, 0, yellow));
    balls.push(new Ball(236, 227, 0, 0, yellow));
    balls.push(new Ball(258, 236, 0, 0, yellow));//83

    balls.push(new Ball(138, 150, 0, 0, yellow));
    balls.push(new Ball(150, 159, 0, 0, yellow));
    balls.push(new Ball(156, 172, 0, 0, yellow));
    balls.push(new Ball(164, 184, 0, 0, yellow));
    balls.push(new Ball(170, 196, 0, 0, yellow));
    balls.push(new Ball(184, 188, 0, 0, yellow));
    balls.push(new Ball(177, 176, 0, 0, yellow));
    balls.push(new Ball(170, 163, 0, 0, yellow));
    balls.push(new Ball(163, 151, 0, 0, yellow));
    balls.push(new Ball(151, 141, 0, 0, yellow));//93

    balls.push(new Ball(164, 134, 0, 0, yellow));
    balls.push(new Ball(176, 144, 0, 0, yellow));
    balls.push(new Ball(184, 156, 0, 0, yellow));
    balls.push(new Ball(191, 168, 0, 0, yellow));
    balls.push(new Ball(198, 181, 0, 0, yellow));
    balls.push(new Ball(205, 193, 0, 0, yellow));
    balls.push(new Ball(221, 202, 0, 0, yellow));
    balls.push(new Ball(229, 214, 0, 0, yellow));
    balls.push(new Ball(207, 207, 0, 0, yellow));
    balls.push(new Ball(191, 200, 0, 0, yellow));//103

    balls.push(new Ball(178, 128, 0, 0, yellow));
    balls.push(new Ball(191, 138, 0, 0, yellow));
    balls.push(new Ball(198, 150, 0, 0, yellow));
    balls.push(new Ball(205, 163, 0, 0, yellow));
    balls.push(new Ball(212, 175, 0, 0, yellow));
    balls.push(new Ball(220, 187, 0, 0, yellow));
    balls.push(new Ball(235, 183, 0, 0, yellow));
    balls.push(new Ball(236, 197, 0, 0, yellow));
    balls.push(new Ball(243, 210, 0, 0, yellow));
    balls.push(new Ball(251, 223, 0, 0, yellow));//113

    balls.push(new Ball(192, 122, 0, 0, yellow));
    balls.push(new Ball(205, 133, 0, 0, yellow));
    balls.push(new Ball(213, 145, 0, 0, yellow));
    balls.push(new Ball(220, 158, 0, 0, yellow));
    balls.push(new Ball(227, 170, 0, 0, yellow));
    balls.push(new Ball(243, 167, 0, 0, yellow));
    balls.push(new Ball(235, 154, 0, 0, yellow));
    balls.push(new Ball(228, 141, 0, 0, yellow));
    balls.push(new Ball(220, 128, 0, 0, yellow));
    balls.push(new Ball(207, 117, 0, 0, yellow));//123

    balls.push(new Ball(221, 114, 0, 0, yellow));
    balls.push(new Ball(235, 125, 0, 0, yellow));
    balls.push(new Ball(243, 138, 0, 0, yellow));
    balls.push(new Ball(251, 151, 0, 0, yellow));
    balls.push(new Ball(227, 170, 0, 0, yellow));
    balls.push(new Ball(258, 165, 0, 0, yellow));
    balls.push(new Ball(251, 194, 0, 0, yellow));
    balls.push(new Ball(259, 207, 0, 0, yellow));
    balls.push(new Ball(266, 221, 0, 0, yellow));
    balls.push(new Ball(274, 233, 0, 0, yellow));//133

    balls.push(new Ball(236, 111, 0, 0, yellow));
    balls.push(new Ball(251, 123, 0, 0, yellow));
    balls.push(new Ball(258, 137, 0, 0, yellow));
    balls.push(new Ball(266, 150, 0, 0, yellow));
    balls.push(new Ball(274, 164, 0, 0, yellow));
    balls.push(new Ball(266, 179, 0, 0, yellow));
    balls.push(new Ball(266, 192, 0, 0, yellow));
    balls.push(new Ball(274, 206, 0, 0, yellow));
    balls.push(new Ball(282, 221, 0, 0, yellow));
    balls.push(new Ball(250, 180, 0, 0, yellow));//143

    balls.push(new Ball(251, 109, 0, 0, yellow));
    balls.push(new Ball(266, 108, 0, 0, yellow));
    balls.push(new Ball(266, 122, 0, 0, yellow));
    balls.push(new Ball(274, 136, 0, 0, yellow));
    balls.push(new Ball(282, 122, 0, 0, yellow));
    balls.push(new Ball(282, 108, 0, 0, yellow));
    balls.push(new Ball(297, 109, 0, 0, yellow));
    balls.push(new Ball(297, 123, 0, 0, yellow));
    balls.push(new Ball(289, 137, 0, 0, yellow));
    balls.push(new Ball(282, 150, 0, 0, yellow));//153

    balls.push(new Ball(312, 111, 0, 0, yellow));
    balls.push(new Ball(313, 125, 0, 0, yellow));
    balls.push(new Ball(305, 138, 0, 0, yellow));
    balls.push(new Ball(297, 151, 0, 0, yellow));
    balls.push(new Ball(290, 165, 0, 0, yellow));
    balls.push(new Ball(282, 179, 0, 0, yellow));
    balls.push(new Ball(282, 193, 0, 0, yellow));
    balls.push(new Ball(289, 207, 0, 0, yellow));
    balls.push(new Ball(297, 194, 0, 0, yellow));
    balls.push(new Ball(298, 180, 0, 0, yellow));//163

    balls.push(new Ball(305, 167, 0, 0, yellow));
    balls.push(new Ball(313, 154, 0, 0, yellow));
    balls.push(new Ball(320, 141, 0, 0, yellow));
    balls.push(new Ball(328, 128, 0, 0, yellow));
    balls.push(new Ball(327, 113, 0, 0, yellow));
    balls.push(new Ball(341, 117, 0, 0, yellow));
    balls.push(new Ball(356, 122, 0, 0, yellow));
    balls.push(new Ball(343, 132, 0, 0, yellow));
    balls.push(new Ball(335, 145, 0, 0, yellow));
    balls.push(new Ball(328, 158, 0, 0, yellow));//173

    balls.push(new Ball(321, 170, 0, 0, yellow));
    balls.push(new Ball(313, 183, 0, 0, yellow));
    balls.push(new Ball(312, 197, 0, 0, yellow));
    balls.push(new Ball(304, 210, 0, 0, yellow));
    balls.push(new Ball(297, 223, 0, 0, yellow));
    balls.push(new Ball(289, 236, 0, 0, yellow));
    balls.push(new Ball(305, 239, 0, 0, yellow));
    balls.push(new Ball(312, 227, 0, 0, yellow));
    balls.push(new Ball(319, 214, 0, 0, yellow));
    balls.push(new Ball(327, 202, 0, 0, yellow));//183

    balls.push(new Ball(328, 187, 0, 0, yellow));
    balls.push(new Ball(335, 175, 0, 0, yellow));
    balls.push(new Ball(343, 162, 0, 0, yellow));
    balls.push(new Ball(350, 150, 0, 0, yellow));
    balls.push(new Ball(358, 138, 0, 0, yellow));
    balls.push(new Ball(370, 128, 0, 0, yellow));
    balls.push(new Ball(383, 134, 0, 0, yellow));
    balls.push(new Ball(371, 144, 0, 0, yellow));
    balls.push(new Ball(364, 156, 0, 0, yellow));
    balls.push(new Ball(357, 169, 0, 0, yellow));//193

    balls.push(new Ball(350, 181, 0, 0, yellow));
    balls.push(new Ball(343, 193, 0, 0, yellow));
    balls.push(new Ball(341, 208, 0, 0, yellow));
    balls.push(new Ball(334, 220, 0, 0, yellow));
    balls.push(new Ball(327, 232, 0, 0, yellow));
    balls.push(new Ball(319, 244, 0, 0, yellow));
    balls.push(new Ball(333, 252, 0, 0, yellow));
    balls.push(new Ball(340, 239, 0, 0, grow));//201

    // Safari (15)
    balls.push(new Ball(347, 227, 0, 0, grow));
    balls.push(new Ball(354, 215, 0, 0, grow));
    balls.push(new Ball(357, 200, 0, 0, grow));
    balls.push(new Ball(364, 188, 0, 0, grow));
    balls.push(new Ball(371, 176, 0, 0, grow));
    balls.push(new Ball(378, 163, 0, 0, grow));
    balls.push(new Ball(385, 151, 0, 0, grow));
    balls.push(new Ball(397, 141, 0, 0, grow));
    balls.push(new Ball(409, 150, 0, 0, grow));
    balls.push(new Ball(399, 159, 0, 0, grow));

    balls.push(new Ball(392, 171, 0, 0, grow));
    balls.push(new Ball(385, 184, 0, 0, grow));
    balls.push(new Ball(377, 196, 0, 0, grow));
    balls.push(new Ball(370, 208, 0, 0, grow));
    balls.push(new Ball(367, 223, 0, 0, grow));

    // Farefox (98)
    balls.push(new Ball(360, 236, 0, 0, blue));
    balls.push(new Ball(353, 248, 0, 0, blue));
    balls.push(new Ball(346, 261, 0, 0, blue));
    balls.push(new Ball(357, 271, 0, 0, blue));
    balls.push(new Ball(364, 259, 0, 0, blue));
    balls.push(new Ball(372, 246, 0, 0, blue));
    balls.push(new Ball(379, 233, 0, 0, blue));
    balls.push(new Ball(383, 218, 0, 0, blue));
    balls.push(new Ball(389, 205, 0, 0, blue));
    balls.push(new Ball(397, 193, 0, 0, blue));//10

    balls.push(new Ball(404, 181, 0, 0, blue));
    balls.push(new Ball(411, 168, 0, 0, blue));
    balls.push(new Ball(422, 159, 0, 0, blue));
    balls.push(new Ball(433, 168, 0, 0, blue));
    balls.push(new Ball(423, 178, 0, 0, blue));
    balls.push(new Ball(416, 190, 0, 0, blue));
    balls.push(new Ball(409, 203, 0, 0, blue));
    balls.push(new Ball(402, 216, 0, 0, blue));
    balls.push(new Ball(395, 229, 0, 0, blue));
    balls.push(new Ball(390, 244, 0, 0, blue));//20

    balls.push(new Ball(382, 257, 0, 0, blue));
    balls.push(new Ball(375, 270, 0, 0, blue));
    balls.push(new Ball(392, 269, 0, 0, blue));
    balls.push(new Ball(408, 269, 0, 0, blue));
    balls.push(new Ball(423, 266, 0, 0, blue));
    balls.push(new Ball(439, 266, 0, 0, blue));
    balls.push(new Ball(454, 266, 0, 0, blue));
    balls.push(new Ball(469, 266, 0, 0, blue));
    balls.push(new Ball(485, 266, 0, 0, blue));
    balls.push(new Ball(501, 268, 0, 0, blue));//30

    balls.push(new Ball(444, 179, 0, 0, blue));
    balls.push(new Ball(435, 189, 0, 0, blue));
    balls.push(new Ball(427, 201, 0, 0, blue));
    balls.push(new Ball(420, 214, 0, 0, blue));
    balls.push(new Ball(412, 227, 0, 0, blue));
    balls.push(new Ball(405, 240, 0, 0, blue));
    balls.push(new Ball(399, 256, 0, 0, blue));
    balls.push(new Ball(414, 253, 0, 0, blue));
    balls.push(new Ball(422, 240, 0, 0, blue));
    balls.push(new Ball(430, 226, 0, 0, blue));//40

    balls.push(new Ball(437, 213, 0, 0, blue));
    balls.push(new Ball(445, 200, 0, 0, blue));
    balls.push(new Ball(455, 190, 0, 0, blue));
    balls.push(new Ball(464, 202, 0, 0, blue));
    balls.push(new Ball(455, 212, 0, 0, blue));
    balls.push(new Ball(447, 226, 0, 0, blue));
    balls.push(new Ball(439, 239, 0, 0, blue));
    balls.push(new Ball(431, 253, 0, 0, blue));
    balls.push(new Ball(447, 252, 0, 0, blue));
    balls.push(new Ball(455, 239, 0, 0, blue));//50

    balls.push(new Ball(464, 225, 0, 0, blue));
    balls.push(new Ball(473, 214, 0, 0, blue));
    balls.push(new Ball(481, 227, 0, 0, blue));
    balls.push(new Ball(472, 238, 0, 0, blue));
    balls.push(new Ball(463, 252, 0, 0, blue));
    balls.push(new Ball(479, 252, 0, 0, blue));
    balls.push(new Ball(489, 240, 0, 0, blue));
    balls.push(new Ball(495, 254, 0, 0, blue));
    balls.push(new Ball(505, 282, 0, 0, blue));
    balls.push(new Ball(490, 281, 0, 0, blue));//60

    balls.push(new Ball(475, 281, 0, 0, blue));
    balls.push(new Ball(460, 280, 0, 0, blue));
    balls.push(new Ball(445, 280, 0, 0, blue));
    balls.push(new Ball(430, 281, 0, 0, blue));
    balls.push(new Ball(415, 282, 0, 0, blue));
    balls.push(new Ball(399, 283, 0, 0, blue));
    balls.push(new Ball(384, 283, 0, 0, blue));
    balls.push(new Ball(367, 283, 0, 0, blue));
    balls.push(new Ball(375, 297, 0, 0, blue));
    balls.push(new Ball(391, 297, 0, 0, blue));//70

    balls.push(new Ball(406, 297, 0, 0, blue));
    balls.push(new Ball(421, 297, 0, 0, blue));
    balls.push(new Ball(435, 295, 0, 0, blue));
    balls.push(new Ball(450, 296, 0, 0, blue));
    balls.push(new Ball(465, 296, 0, 0, blue));
    balls.push(new Ball(479, 296, 0, 0, blue));
    balls.push(new Ball(494, 296, 0, 0, blue));
    balls.push(new Ball(509, 297, 0, 0, blue));
    balls.push(new Ball(511, 312, 0, 0, blue));
    balls.push(new Ball(497, 311, 0, 0, blue));//80

    balls.push(new Ball(482, 311, 0, 0, blue));
    balls.push(new Ball(468, 311, 0, 0, blue));
    balls.push(new Ball(454, 311, 0, 0, blue));
    balls.push(new Ball(439, 311, 0, 0, blue));
    balls.push(new Ball(425, 312, 0, 0, blue));
    balls.push(new Ball(410, 311, 0, 0, blue));
    balls.push(new Ball(396, 311, 0, 0, blue));
    balls.push(new Ball(381, 311, 0, 0, blue));
    balls.push(new Ball(385, 326, 0, 0, blue));
    balls.push(new Ball(399, 327, 0, 0, blue));//90

    balls.push(new Ball(414, 327, 0, 0, blue));
    balls.push(new Ball(428, 327, 0, 0, blue));
    balls.push(new Ball(442, 326, 0, 0, blue));
    balls.push(new Ball(456, 326, 0, 0, blue));
    balls.push(new Ball(471, 326, 0, 0, blue));
    balls.push(new Ball(485, 326, 0, 0, blue));
    balls.push(new Ball(499, 326, 0, 0, blue));
    balls.push(new Ball(513, 327, 0, 0, blue));
    balls.push(new Ball(514, 342, 0, 0, blue));//99

    // Opera (9)
    balls.push(new Ball(500, 342, 0, 0, green));
    balls.push(new Ball(486, 342, 0, 0, green));
    balls.push(new Ball(471, 342, 0, 0, green));
    balls.push(new Ball(457, 342, 0, 0, green));
    balls.push(new Ball(443, 342, 0, 0, green));
    balls.push(new Ball(429, 342, 0, 0, green));
    balls.push(new Ball(415, 342, 0, 0, green));
    balls.push(new Ball(401, 342, 0, 0, green));
    balls.push(new Ball(386, 342, 0, 0, green));

    return balls;
}
function getMousePos(canvas, evt) {
    // get canvas position
    var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }

    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}
function updateBalls(canvas, balls, timeDiff, mousePos) {
    var context = canvas.getContext('2d');
    var collisionDamper = 0.3;
    var floorFriction = 0.0005 * timeDiff;
    var mouseForceMultiplier = 1 * timeDiff;
    var restoreForce = 0.002 * timeDiff;

    for (var n = 0; n < balls.length; n++) {
        var ball = balls[n];
        // set ball position based on velocity
        ball.y += ball.vy;
        ball.x += ball.vx;

        // restore forces
        if (ball.x > ball.origX) {
            ball.vx -= restoreForce;
        }
        else {
            ball.vx += restoreForce;
        }
        if (ball.y > ball.origY) {
            ball.vy -= restoreForce;
        }
        else {
            ball.vy += restoreForce;
        }

        // mouse forces
        var mouseX = mousePos.x;
        var mouseY = mousePos.y;

        var distX = ball.x - mouseX;
        var distY = ball.y - mouseY;

        var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

        var totalDist = Math.abs(distX) + Math.abs(distY);

        var forceX = (Math.abs(distX) / totalDist) * (1 / radius) * mouseForceMultiplier;
        var forceY = (Math.abs(distY) / totalDist) * (1 / radius) * mouseForceMultiplier;

        if (distX > 0) {// mouse is left of ball
            ball.vx += forceX;
        }
        else {
            ball.vx -= forceX;
        }
        if (distY > 0) {// mouse is on top of ball
            ball.vy += forceY;
        }
        else {
            ball.vy -= forceY;
        }

        // floor friction
        if (ball.vx > 0) {
            ball.vx -= floorFriction;
        }
        else if (ball.vx < 0) {
            ball.vx += floorFriction;
        }
        if (ball.vy > 0) {
            ball.vy -= floorFriction;
        }
        else if (ball.vy < 0) {
            ball.vy += floorFriction;
        }

        // floor condition
        if (ball.y > (canvas.height - ball.radius)) {
            ball.y = canvas.height - ball.radius - 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
        }

        // ceiling condition
        if (ball.y < (ball.radius)) {
            ball.y = ball.radius + 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
        }

        // right wall condition
        if (ball.x > (canvas.width - ball.radius)) {
            ball.x = canvas.width - ball.radius - 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
        }

        // left wall condition
        if (ball.x < (ball.radius)) {
            ball.x = ball.radius + 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
        }
    }
}
function Ball(x, y, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.origX = x;
    this.origY = y;
    this.radius = 6;
}
function animate(canvas, balls, lastTime, mousePos) {
    var context = canvas.getContext('2d');

    // update
    var date = new Date();
    var time = date.getTime();
    var timeDiff = time - lastTime;
    updateBalls(canvas, balls, timeDiff, mousePos);
    lastTime = time;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // render
    for (var n = 0; n < balls.length; n++) {
        var ball = balls[n];
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
        context.fillStyle = ball.color;
        context.fill();
    }

    // request new frame
    requestAnimFrame(function () {
        animate(canvas, balls, lastTime, mousePos);
    });
}
var canvas = document.getElementById('myCanvas');
var balls = initBalls();
var date = new Date();
var time = date.getTime();
/*
 * set mouse position really far away
 * so the mouse forces are nearly obsolete
 */
var mousePos = {
    x: 9999,
    y: 9999
};

canvas.addEventListener('mousemove', function (evt) {
    var pos = getMousePos(canvas, evt);
    mousePos.x = pos.x;
    mousePos.y = pos.y;
});

canvas.addEventListener('mouseout', function (evt) {
    mousePos.x = 9999;
    mousePos.y = 9999;
});
animate(canvas, balls, time, mousePos);
