import { useEffect, useState, useMemo } from 'react';

export const useTimers = (
  fightVisible,
  setFightVisible,
  starterVisible,
  setStarterSelectorVisible,
  gameNavbarVisible,
  setGameNavbarVisible
) => {
  const [visible, setVisible] = useState({
    heading: false,
    cardA: false,
    cardB: false,
    characterA: false,
    characterB: false,
    characterAText: false,
    characterBText: false,
    hpText: false,
    spAtk: false,
    dice: false,
    navbar: false,
  });

  const timerConfig = useMemo(() => ([
    { time: 200, action: () => setGameNavbarVisible(true) },
    { time: 400, action: () => setVisible((prev) => ({ ...prev, cardA: true })) },
    { time: 600, action: () => setVisible((prev) => ({ ...prev, characterA: true })) },
    { time: 800, action: () => setVisible((prev) => ({ ...prev, cardB: true })) },
    { time: 1000, action: () => setVisible((prev) => ({ ...prev, characterB: true })) },
    { time: 1300, action: () => setVisible((prev) => ({ ...prev, characterAText: true })) },
    { time: 1600, action: () => setVisible((prev) => ({ ...prev, characterBText: true })) },
    { time: 1900, action: () => setVisible((prev) => ({ ...prev, hpText: true })) },
    { time: 2100, action: () => setVisible((prev) => ({ ...prev, spAtk: true })) },
    { time: 2400, action: () => setVisible((prev) => ({ ...prev, dice: true })) },
    { time: 2700, action: () => setVisible((prev) => ({ ...prev, heading: true })) },
    { time: 2900, action: () => setFightVisible(true) },
    { time: 3300, action: () => setStarterSelectorVisible(true) },
  ]), [setFightVisible, setStarterSelectorVisible, setGameNavbarVisible]);

  useEffect(() => {
    const timers = timerConfig.map((config) => setTimeout(config.action, config.time));

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [timerConfig]);

  return visible;
};