import { openingHoursDetailed, type DayHours } from '@data/hours';

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

export function isGymOpen(): boolean {
  try {
    // Get current time in Amsterdam timezone
    const now = new Date();
    const nlTime = new Intl.DateTimeFormat('nl-NL', {
      timeZone: 'Europe/Amsterdam',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(now);

    // Get day of week in Amsterdam timezone
    const nlDate = new Date(
      now.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })
    );
    const dayOfWeek = nlDate.getDay();

    // Get today's hours
    const todayHours: DayHours | undefined = openingHoursDetailed[dayOfWeek];
    if (!todayHours) return false;

    // Convert times to minutes for comparison
    const currentMinutes = timeToMinutes(nlTime);
    const openMinutes = timeToMinutes(todayHours.open);
    const closeMinutes = timeToMinutes(todayHours.close);

    return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  } catch (error) {
    // Fallback: return false if timezone calculation fails
    console.error('Error calculating gym status:', error);
    return false;
  }
}

function getNextOpening(): string {
  try {
    const now = new Date();
    const nlDate = new Date(
      now.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' })
    );
    const currentDay = nlDate.getDay();

    // Get current time in minutes
    const nlTime = new Intl.DateTimeFormat('nl-NL', {
      timeZone: 'Europe/Amsterdam',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(now);
    const currentMinutes = timeToMinutes(nlTime);

    // Check if gym opens later today
    const todayHours = openingHoursDetailed[currentDay];
    if (todayHours) {
      const openMinutes = timeToMinutes(todayHours.open);
      if (currentMinutes < openMinutes) {
        return `Open om ${todayHours.open}`;
      }
    }

    // Check tomorrow
    const tomorrowDay = (currentDay + 1) % 7;
    const tomorrowHours = openingHoursDetailed[tomorrowDay];
    if (tomorrowHours) {
      return `Open morgen om ${tomorrowHours.open}`;
    }

    // Fallback to next available day
    for (let i = 2; i <= 7; i++) {
      const nextDay = (currentDay + i) % 7;
      const nextHours = openingHoursDetailed[nextDay];
      if (nextHours) {
        const dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
        return `Open ${dayNames[nextDay]} om ${nextHours.open}`;
      }
    }

    return '';
  } catch (error) {
    console.error('Error calculating next opening:', error);
    return '';
  }
}

export function getStatusText(): { text: string; isOpen: boolean } {
  const isOpen = isGymOpen();

  if (isOpen) {
    return {
      text: 'OPEN NU',
      isOpen: true,
    };
  }

  const nextOpening = getNextOpening();
  return {
    text: nextOpening ? `Gesloten • ${nextOpening}` : 'GESLOTEN',
    isOpen: false,
  };
}
