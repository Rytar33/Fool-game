-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 24 2023 г., 01:00
-- Версия сервера: 8.0.19
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `db users`
--

-- --------------------------------------------------------

--
-- Структура таблицы `statisticswithbot`
--

CREATE TABLE `statisticswithbot` (
  `id` int NOT NULL,
  `quantityWin` int NOT NULL DEFAULT '0',
  `quantityLose` int NOT NULL DEFAULT '0',
  `quantityDraw` int NOT NULL DEFAULT '0',
  `quantityGame` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `statisticswithbot`
--

INSERT INTO `statisticswithbot` (`id`, `quantityWin`, `quantityLose`, `quantityDraw`, `quantityGame`) VALUES
(1, 0, 0, 0, 0),
(2, 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `statisticswithplayer`
--

CREATE TABLE `statisticswithplayer` (
  `id` int NOT NULL,
  `quantityWin` int NOT NULL DEFAULT '0',
  `quantityLose` int NOT NULL DEFAULT '0',
  `quantityDraw` int NOT NULL DEFAULT '0',
  `quantityGame` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `statisticswithplayer`
--

INSERT INTO `statisticswithplayer` (`id`, `quantityWin`, `quantityLose`, `quantityDraw`, `quantityGame`) VALUES
(1, 0, 0, 0, 0),
(2, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(12) NOT NULL,
  `email` varchar(319) NOT NULL,
  `password` varchar(60) NOT NULL,
  `backgroundCard` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `backgroundCard`) VALUES
(1, 'Robert', 'sdfsdf@gmail.com', 'qwerty', 'gydro'),
(2, 'Viktor', 'werths@gmail.com', '12345', 'anemo');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `statisticswithbot`
--
ALTER TABLE `statisticswithbot`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `statisticswithplayer`
--
ALTER TABLE `statisticswithplayer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `statisticswithbot`
--
ALTER TABLE `statisticswithbot`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `statisticswithplayer`
--
ALTER TABLE `statisticswithplayer`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
