const questions = [
    {
        "question": "Of what wood was Noah's Ark made?",
        "options": ["Gopher wood", "Acacia wood", "Cedar of Lebanon", "Carob wood"],
        "answer": "Gopher wood",
        "scripture": "Gen 6:14",
        "theme": "Noah"
    },
    {
        "question": "How long was the ark?",
        "options": ["500 cubits", "100 cubits", "300 cubits", "250 cubits"],
        "answer": "300 cubits",
        "scripture": "Gen 6:15",
        "theme": "Noah"
    },
    {
        "question": "For how long did the flood rain fall?",
        "options": ["80 days and nights", "12 days and nights", "107 days and nights", "40 days and 40 nights"],
        "answer": "40 days and 40 nights",
        "scripture": "Gen 7:12",
        "theme": "Noah"
    },
    {
        "question": "How long did the flood cover the earth?",
        "options": ["19 days", "150 days", "50 days", "15 days"],
        "answer": "150 days",
        "scripture": "Gen 7:24",
        "theme": "Noah"
    },
    {
        "question": "How old was Joseph when his brethren sold him into slavery?",
        "options": ["69", "23", "17", "90"],
        "answer": "17",
        "scripture": "Gen 37:2",
        "theme": "Joseph"
    },
    {
        "question": "Who suggested that Joseph interpret the dreams of Pharaoh?",
        "options": ["Potiphar", "The cupbearer", "Judah", "The baker"],
        "answer": "The cupbearer",
        "scripture": "Gen 41:12-13",
        "theme": "Joseph"
    },
    {
        "question": "What are the names of Joseph's two sons?",
        "options": ["John and Mark", "Cain and Abel", "Ephraim and Manasseh", "Dan and Naphtali"],
        "answer": "Ephraim and Manasseh",
        "scripture": "Gen 41:51-52",
        "theme": "Joseph"
    },
    {
        "question": "How long did Moses's mother hide him to escape the death edict of Pharaoh?",
        "options": ["13 months", "10 months", "3 months", "7 months"],
        "answer": "3 months",
        "scripture": "Exod 2:2",
        "theme": "Moses"
    },
    {
        "question": "Who was Moses's father-in-law?",
        "options": ["Laban", "Mordechai", "Jethro", "Cyrus"],
        "answer": "Jethro",
        "scripture": "Exod 3:1",
        "theme": "Moses"
    },
    {
        "question": "What was the name of Aaron's (Moses's brother) wife?",
        "options": ["Elisheba", "Miriam", "Zipporah", "Deborah"],
        "answer": "Elisheba",
        "scripture": "Exod 6:23",
        "theme": "Moses"
    },
    {
        "question": "How old was Moses when he gave God's message to Pharaoh: 'Let my people go'?",
        "options": ["80 years", "18 years", "13 years", "39 years"],
        "answer": "80 years",
        "scripture": "Exod 7:7",
        "theme": "Moses"
    },
    {
        "question": "What was the first of the ten plagues in Egypt?",
        "options": ["Frogs", "Water turned into blood", "Plague of lice", "Darkness"],
        "answer": "Water turned into blood",
        "scripture": "Exod 7:20",
        "theme": "Moses"
    },
    {
        "question": "Where was Moses buried?",
        "options": ["In Canaan", "In a cave", "In the valley of Moab", "In the desert"],
        "answer": "In the valley of Moab",
        "scripture": "Deut 34:6",
        "theme": "Moses"
    },
    {
        "question": "What was the height of Goliath? In other words, how giant was this giant?",
        "options": ["Six cubits and a span", "Seven cubits and two spans", "Nine cubits and a span", "Five cubits and three spans"],
        "answer": "Six cubits and a span",
        "scripture": "1 Sam 17:4",
        "theme": "David"
    },
    {
        "question": "When Saul was pursuing David, in which cave did David seek refuge?",
        "options": ["Cave at Makkedah", "Cave of Machpelah", "Cave of Adullam", "Dambulla Cave"],
        "answer": "Cave of Adullam",
        "scripture": "1 Sam 22:1",
        "theme": "David"
    },
    {
        "question": "Who was the chief of the three mighty men of David?",
        "options": ["Jonathan", "Benaiah", "Josheb-basshebeth", "Abishai"],
        "answer": "Josheb-basshebeth",
        "scripture": "2 Sam 23:8",
        "theme": "David"
    },
    {
        "question": "Who restored Paul's sight after the Lord blinded him?",
        "options": ["Peter", "Luke", "Ananias", "Matthew"],
        "answer": "Ananias",
        "scripture": "Acts 9:17-18",
        "theme": "Paul"
    },
    {
        "question": "How did Paul escape Damascus when the Jews were trying to kill him?",
        "options": ["He was let down from the city walls in a basket", "An angel lifted him out", "An earthquake created the means of escape", "Silas came to his rescue"],
        "answer": "He was let down from the city walls in a basket",
        "scripture": "Acts 9:25",
        "theme": "Paul"
    },
    {
        "question": "Where was Paul stoned?",
        "options": ["Melita", "Damascus", "Galilee", "Lystra"],
        "answer": "Lystra",
        "scripture": "Acts 14:19",
        "theme": "Paul"
    },
    {
        "question": "Where was an altar erected 'to the unknown God'?",
        "options": ["Athens", "Capernaum", "Thessalonica", "Jericho"],
        "answer": "Athens",
        "scripture": "Acts 17:22-23",
        "theme": "Paul"
    },
    {
        "question": "What Athenian judge was converted under Paul's preaching?",
        "options": ["Eunice", "Candace", "Eubulus", "Dionysius"],
        "answer": "Dionysius",
        "scripture": "Acts 17:34",
        "theme": "Paul"
    },
    {
        "question": "What was Paul's occupation?",
        "options": ["Carpentry", "Tentmaking", "Stonemasonry", "Fishing"],
        "answer": "Tentmaking",
        "scripture": "Acts 18:3",
        "theme": "Paul"
    },
    {
        "question": "Prior to raising Eutychus from the dead, Paul preached a lengthy sermon. At what hour did he end his sermon?",
        "options": ["Early morning", "Mid afternoon", "Late evening", "Midnight"],
        "answer": "Midnight",
        "scripture": "Acts 20:7",
        "theme": "Paul"
    },
    {
        "question": "What does Paul say is the fulfillment of the law?",
        "options": ["Righteousness", "Patience", "Faith", "Love"],
        "answer": "Love",
        "scripture": "Rom 13:10",
        "theme": "Paul"
    },
    {
        "question": "What was the total number of the children of Israel that went down to Egypt?",
        "options": ["1000", "70", "53", "560"],
        "answer": "70",
        "scripture": "Gen 46:27",
        "theme": "Children of Israel"
    },
    {
        "question": "How long were the children of Israel in Egypt?",
        "options": ["150 years", "40 years", "215 years", "666 years"],
        "answer": "215 years",
        "scripture": "",
        "theme": "Children of Israel"
    },
    {
        "question": "How were the children of Israel guided in their forty years of wandering in the wilderness?",
        "options": ["By a pillar of cloud by day and a pillar of fire by night", "By the voice of God", "By Moses", "By Aaron's rod"],
        "answer": "By a pillar of cloud by day and a pillar of fire by night",
        "scripture": "Exod 13:21",
        "theme": "Children of Israel"
    },
    {
        "question": "How long did the children of Israel journey in the wilderness of Shur before they found water?",
        "options": ["5 days", "15 days", "3 days", "7 days"],
        "answer": "3 days",
        "scripture": "Exod 15:22",
        "theme": "Children of Israel"
    },
    {
        "question": "Upon what mountain was Israel cursed for disobedience?",
        "options": ["Mount Moriah", "Mount Zion", "Mount Carmel", "Mount Ebal"],
        "answer": "Mount Ebal",
        "scripture": "Deut 27:13",
        "theme": "Children of Israel"
    },
    {
        "question": "By whom were the children of Israel carried captive into Assyria?",
        "options": ["Nebuchadnezzar", "Tiglathpileser", "Darius", "Ahaz"],
        "answer": "Tiglathpileser",
        "scripture": "2 Kgs 15:29",
        "theme": "Children of Israel"
    },
    {
        "question": "How long were the children of Israel in captivity?",
        "options": ["70 years", "49 years", "59 years", "100 years"],
        "answer": "70 years",
        "scripture": "Jer 25:11",
        "theme": "Children of Israel"
    },
    {
        "question": "What were Solomon's other names?",
        "options": ["Jedediah and Lemuel", "Joab and Lemuel", "Jedediah and Joab", "Lemuel and Jeremiah"],
        "answer": "Jedediah and Lemuel",
        "scripture": "2 Sam 12:25; Prov 31:1",
        "theme": "Kings"
    },
    {
        "question": "What king was guilty of idolatry in making two golden calves and commanding the people to worship them?",
        "options": ["Jeroboam", "Jehu", "Joktan", "Joram"],
        "answer": "Jeroboam",
        "scripture": "1 Kgs 12:28",
        "theme": "Kings"
    },
    {
        "question": "Who was the most wicked king of Israel?",
        "options": ["Ahab", "Abimelech", "Manasseh", "Menahem"],
        "answer": "Ahab",
        "scripture": "1 Kgs 21:25",
        "theme": "Kings"
    },
    {
        "question": "What two kings disguised themselves before going into battle, and were both slain by archers?",
        "options": ["Ahab and Zedekiah", "Enosh and Zedekiah", "Japeth and Josiah", "Ahab and Josiah"],
        "answer": "Ahab and Josiah",
        "scripture": "1 Kings 22:34; 2 Chron 35:22",
        "theme": "Kings"
    },
    {
        "question": "What king was killed by his own sons?",
        "options": ["Manasseh", "Sennacherib", "Ahaz", "Jotham"],
        "answer": "Sennacherib",
        "scripture": "2 Kgs 19:36",
        "theme": "Kings"
    },
    {
        "question": "What king of Judah was overtaken by an invading army and had his eyes put out?",
        "options": ["Zedekiah", "Jehoram", "Abijah", "Rehoboam"],
        "answer": "Zedekiah",
        "scripture": "2 Kgs 25:7",
        "theme": "Kings"
    },
    {
        "question": "What king's name meant peaceable?",
        "options": ["Manasseh", "Josiah", "Solomon", "David"],
        "answer": "Solomon",
        "scripture": "1 Chron 22:9",
        "theme": "Kings"
    },
    {
        "question": "Who was made king of Judah at seven years of age after having been hidden for six years?",
        "options": ["Jehoshaphat", "Hosea", "Joash", "Ahaz"],
        "answer": "Joash",
        "scripture": "2 Chron 23:11",
        "theme": "Kings"
    },
    {
        "question": "What king did God smite with leprosy?",
        "options": ["Athaliah", "Jehoram", "Amaziah", "Uzziah"],
        "answer": "Uzziah",
        "scripture": "2 Chron 26:19",
        "theme": "Kings"
    },
    {
        "question": "What king of Israel followed heathen practices by burning his children in the fire?",
        "options": ["Abimelech", "Ahab", "Menahem", "Ahaz"],
        "answer": "Ahaz",
        "scripture": "2 Chron 28:3",
        "theme": "Kings"
    },
    {
        "question": "What king was on the throne of Judah when he was only eight years old?",
        "options": ["Adonibezek", "Jehoiachin", "Joash", "David"],
        "answer": "Jehoiachin",
        "scripture": "2 Chron 36:9",
        "theme": "Kings"
    },
    {
        "question": "What was the name of the king of Judah who had his eyes put out and then was imprisoned for life?",
        "options": ["Zedekiah", "Absalom", "Jehoshaphat", "Abimelech"],
        "answer": "Zedekiah",
        "scripture": "Jer 52:11",
        "theme": "Kings"
    },
    {
        "question": "What was the first prophecy?",
        "options": ["The end of the age", "The victory over Satan of the seed of the woman", "The second coming of Christ", "The destruction of the temple"],
        "answer": "The victory over Satan of the seed of the woman",
        "scripture": "Gen 3:15",
        "theme": "Prophets"
    },
    {
        "question": "What aged prophet's hands were upheld by two persons and caused the armies of Israel to be victorious?",
        "options": ["Elisha", "Elijah", "Moses", "Hosea"],
        "answer": "Moses",
        "scripture": "Exod 17:12",
        "theme": "Prophets"
    },
    {
        "question": "What prophet foretold the result of the ten tribes of Israel?",
        "options": ["Isaiah", "Nahum", "Ahijah", "Nehemiah"],
        "answer": "Ahijah",
        "scripture": "1 Kgs 11:29",
        "theme": "Prophets"
    },
    {
        "question": "Who prophesied that Judah should be carried captive into Babylon?",
        "options": ["Zechariah", "Nahum", "Jeremiah", "Haggai"],
        "answer": "Jeremiah",
        "scripture": "Jer 20:4",
        "theme": "Prophets"
    },
    {
        "question": "Which of the prophets was carried captive to Babylon?",
        "options": ["Ezekiel", "Malachi", "Nehemiah", "Zechariah"],
        "answer": "Ezekiel",
        "scripture": "Ezek 1:1",
        "theme": "Prophets"
    },
    {
        "question": "What prophet was suspended between earth and heaven by a lock of his hair?",
        "options": ["Daniel", "Ezekiel", "Joel", "Elisha"],
        "answer": "Ezekiel",
        "scripture": "Ezek 8:3",
        "theme": "Prophets"
    },
    {
        "question": "What prophet was sent as a missionary to the Ninevites?",
        "options": ["Jonah", "Paul", "Elon", "Malachi"],
        "answer": "Jonah",
        "scripture": "Jonah 1:1-2",
        "theme": "Prophets"
    },
    {
        "question": "The destruction of Nineveh was the fulfillment of whose prophecy?",
        "options": ["The prophet Jonah", "The prophet Isaiah", "The prophet Daniel", "The prophet Nahum"],
        "answer": "The prophet Nahum",
        "scripture": "Nah 3",
        "theme": "Prophets"
    },
]

export default questions;