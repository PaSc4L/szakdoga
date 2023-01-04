-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Dec 07. 15:02
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `chat_system`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `conversation`
--

CREATE TABLE `conversation` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `message`
--

CREATE TABLE `message` (
  `ID` int(11) NOT NULL,
  `Text` text NOT NULL,
  `SentAt` date NOT NULL,
  `ID_Conversation` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `ID` int(10) NOT NULL,
  `Username` varchar(20) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(320) NOT NULL,
  `Password` varchar(300) NOT NULL,
  `Phone` varchar(11) NOT NULL,
  `BirthDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `usersinconversation`
--

CREATE TABLE `usersinconversation` (
  `JoinDate` date NOT NULL,
  `LeaveDate` date NOT NULL,
  `ID_Conversation` int(11) NOT NULL,
  `ID_User` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `conversation`
--
ALTER TABLE `conversation`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_conversation` (`ID_Conversation`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID` (`ID`),
  ADD KEY `ID_2` (`ID`);

--
-- A tábla indexei `usersinconversation`
--
ALTER TABLE `usersinconversation`
  ADD KEY `ID_Conversation` (`ID_Conversation`,`ID_User`),
  ADD KEY `ID_User` (`ID_User`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `conversation`
--
ALTER TABLE `conversation`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `message`
--
ALTER TABLE `message`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`ID_conversation`) REFERENCES `conversation` (`ID`),
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`ID_Conversation`) REFERENCES `conversation` (`ID`);

--
-- Megkötések a táblához `usersinconversation`
--
ALTER TABLE `usersinconversation`
  ADD CONSTRAINT `usersinconversation_ibfk_1` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `usersinconversation_ibfk_2` FOREIGN KEY (`ID_Conversation`) REFERENCES `conversation` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
