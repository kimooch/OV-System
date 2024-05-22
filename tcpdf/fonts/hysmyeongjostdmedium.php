<?php
$type = "cidfont0";
$name = "HYSMyeongJoStd-Medium-Acro"; // AdobeMyungjoStd-Medium-Acro in acrobat 6
$displayname = "MyungJo Medium (Korean)";
$desc = [
    "Ascent" => 880,
    "Descent" => -120,
    "CapHeight" => 720,
    "Flags" => 6,
    "FontBBox" => "[-28 -148 1001 880]",
    "ItalicAngle" => 0,
    "StemV" => 60,
    "Style" => "<< /Panose <000000000600000000000000> >>",
];
$cidinfo = [
    "Registry" => "Adobe",
    "Ordering" => "Korea1",
    "Supplement" => "1",
];
$enc = "UniKS-UCS2-H";

// underline position, needs checking:
$up = -130;
$ut = 40;

$dw = 1000;
$cw = [
    32 => 333,
    33 => 416,
    34 => 416,
    35 => 833,
    36 => 625,
    37 => 916,
    38 => 833,
    39 => 250,
    40 => 500,
    41 => 500,
    42 => 500,
    43 => 833,
    44 => 291,
    45 => 450,
    46 => 291,
    47 => 375,
    48 => 625,
    49 => 625,
    50 => 625,
    51 => 625,
    52 => 625,
    53 => 625,
    54 => 625,
    55 => 625,
    56 => 625,
    57 => 625,
    58 => 333,
    59 => 333,
    60 => 833,
    61 => 833,
    62 => 916,
    63 => 500,
    64 => 1000,
    65 => 791,
    66 => 708,
    67 => 708,
    68 => 750,
    69 => 708,
    70 => 666,
    71 => 750,
    72 => 791,
    73 => 375,
    74 => 500,
    75 => 791,
    76 => 666,
    77 => 916,
    78 => 791,
    79 => 750,
    80 => 666,
    81 => 750,
    82 => 708,
    83 => 666,
    84 => 791,
    85 => 791,
    86 => 750,
    87 => 1000,
    88 => 708,
    89 => 708,
    90 => 666,
    91 => 500,
    92 => 375,
    93 => 500,
    94 => 500,
    95 => 500,
    96 => 333,
    97 => 541,
    98 => 583,
    99 => 541,
    100 => 583,
    101 => 583,
    102 => 375,
    103 => 583,
    104 => 583,
    105 => 291,
    106 => 333,
    107 => 583,
    108 => 291,
    109 => 875,
    110 => 583,
    111 => 583,
    112 => 583,
    113 => 583,
    114 => 458,
    115 => 541,
    116 => 375,
    117 => 583,
    118 => 583,
    119 => 833,
    120 => 625,
    121 => 625,
    122 => 500,
    123 => 583,
    124 => 583,
    125 => 583,
    126 => 750,
];
$_cr = [
    //array(97, 97, 500),
    [8094, 8190, 500],
];
foreach ($_cr as $_r) {
    for ($i = $_r[0]; $i <= $_r[1]; $i++) {
        $cw[$i + 31] = $_r[2];
    }
}
// --- EOF ---
