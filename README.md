CREATE TABLE `admin` (
`id` int(11) NOT NULL,
`username` varchar(50) NOT NULL,
`password` varchar(60) NOT NULL,
`firstname` varchar(50) NOT NULL,
`lastname` varchar(50) NOT NULL,
`photo` varchar(150) NOT NULL,
`created_on` date NOT NULL
);

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `firstname`, `lastname`, `photo`, `created_on`) VALUES
(1, 'rovic', '$2y$10$0Q5N9aBUl6ggW9GxHtPQ7uyW81Oa0Bid05LLgX947WwXFWs5/e9pK', 'Rovic', 'Balingbing', '623aa8f9933ee9a286871bf6e0782538.jpg', '2023-06-25');

---

--
-- Table structure for table `candidates`
--

CREATE TABLE `candidates` (
`id` int(11) NOT NULL,
`position_id` int(11) NOT NULL,
`firstname` varchar(30) NOT NULL,
`lastname` varchar(30) NOT NULL,
`photo` varchar(150) NOT NULL,
);

---

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
`id` int(11) NOT NULL,
`description` varchar(50) NOT NULL,
`max_vote` int(11) NOT NULL,
`priority` int(11) NOT NULL
);

---

--
-- Table structure for table `voters`
--

CREATE TABLE `voters` (
`id` int(11) NOT NULL,
`voters_id` varchar(15) NOT NULL,
`password` varchar(60) NOT NULL,
`firstname` varchar(30) NOT NULL,
`lastname` varchar(30) NOT NULL,
`photo` varchar(150) NOT NULL
);

---

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
`id` int(11) NOT NULL,
`voters_id` int(11) NOT NULL,
`candidate_id` int(11) NOT NULL,
`position_id` int(11) NOT NULL
);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
ADD PRIMARY KEY (`id`);

--
-- Indexes for table `candidates`
--
ALTER TABLE `candidates`
ADD PRIMARY KEY (`id`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
ADD PRIMARY KEY (`id`);

--
-- Indexes for table `voters`
--
ALTER TABLE `voters`
ADD PRIMARY KEY (`id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `candidates`
--
ALTER TABLE `candidates`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `voters`
--
ALTER TABLE `voters`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
