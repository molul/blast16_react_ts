export const faq = [
  {
    q: "I flashed the image and Blast16 won't launch",
    a: (
      <>
        This has been recently reported by some users, and apparently it's
        caused on recent Raspberry Pi 3B+ models.
        <br />
        <br />
        The current solution is manually copying a few files to your Raspberry.
        Find "Fix for newest RPi 3B+ models" in Downloads, download the file and
        follow the instructions in the README.txt file inside.
        <br />
        <br />A new Blast16 version will be released as soon as possible,
        containing this fix.
      </>
    ),
  },
  {
    q: "I added a lot of ROMs and the screen is blinking. What's happening?",
    a: (
      <>
        You added too many ROMs. While you can add around 1000 ROMs more or
        less, it's strongly recommended that you only add those games you truly
        want to play, and use the favourites list to have a smaller list of
        those games. Less games results in smoother performace and better game
        browsing.
        <br />
        <br />
        Blast16 is not meant to hold all Mega Drive/32X/Sega CD/Master
        System/Game Gear games, but to help people create a Mega Drive mini out
        of a Raspberry Pi, and like any mini console, it's designed to have just
        the right amount of games.
      </>
    ),
  },
  {
    q: "Will you make separate game menus per console?",
    a: "No. Blast16 is conceptually a way to turn your Raspberry Pi into a Mega Drive Mini. The other systems are just a bonus. Since version 1.0.9, games are sorted by system and then alphabetically, and by pressing Down you can move to the next system's first game.",
  },
  {
    q: "Can background music be changed?",
    a: "No.",
  },
  {
    q: "How do I update with a new image?",
    a: (
      <>
        You have to flash the image like the first one you downloaded and
        installed. However, that's a pity because you'll erase all your games,
        boxarts, settings, saved states… So you better do a “backup and
        restore”. Follow these steps:
        <br />
        <br />
        1- Connect an USB drive to your Raspberry.
        <br />
        2- In Blast16, go to Options-Tools-Backup and press A, then confirm.
        Wait for the backup to finish.
        <br />
        3- Connect the USB drive to your computer to make sure the backup was
        made (there should be a directory named “blast16_backup”).
        <br />
        4- Turn your Raspberry Pi off.
        <br />
        5- Extract the microSD and flash the new image.
        <br />
        6- Insert the microSD and boot the Raspberry.
        <br />
        7- Connect the USB drive again.
        <br />
        8- Go to Options-Tools-Restore system and press A, then confirm. Wait
        for the restore to be finished.
        <br />
        <br />
        All your games, boxarts, etc should be there again.
      </>
    ),
  },
  {
    q: "Can I change other Retroarch options that are not visible in the frontend?",
    a: "Yes, by going to Options-Tools-Open Retroarch. But bear in mind that any change in Retroarch that is not doable from the frontend is not supported.",
  },
  {
    q: "My gamepad is detected but some buttons are not.",
    a: "Blast16 is compatible with Direct-Input (D-Input) controllers only, so you need to check if your controller has this connection mode. For instance, Retroflag Mega Drive controllers are set as D-input by pressing “Y” before connecting to the USB port (you only need to do that once), and 8bitdo usually turn on on D-input mode by pressing B+Start.",
  },
  {
    q: "Can I enable WiFi?",
    a: "Yes, by going to Options-Tools-Command line. Connect a keyboard to the Pi, type “sudo raspi-config” and press Enter. Then go to Network and then WiFi and enter your network's name and password.",
  },
  {
    q: "Will you support Retroarchievements?",
    a: "Not in the current roadmap.",
  },
  {
    q: "My bluetooth controller doesn't connect after flashing the latest version.",
    a: (
      <>
        When you flash a new image, all bluetooth controllers are forgotten. You
        have to pair them like the first time. However, if you already paired
        them and put them on pairing mode again, they can become unrecognizable
        by the Pi (not sure why). In those cases, please follow these steps:
        <br />
        <br />
        1- Connect your controller by USB to the Raspberry.
        <br />
        2- Go to options, settings, input.
        <br />
        3- Go to “Reset Bluetooth cache” and press A.
        <br />
        4- Turn the raspberry pi off.
        <br />
        5- Disconnect your controller.
        <br />
        6- Turn the Raspberry pi on.
        <br />
        7- When you see Blast16 logo, you can turn the controller on (remember
        to do it in D-input mode) and hold the pairing button until it's on
        pairing mode.
      </>
    ),
  },
  {
    q: "Can I use a keyboard?",
    a: "Blast16 can be controlled with a keyboard, but for playing games you'll need a controller.",
  },
  {
    q: "What’s the name of the background music and who wrote it?",
    a: (
      <>
        It's called{" "}
        <a href="https://www.youtube.com/watch?v=APVrb9lugqQ" target="_blank">
          “The management song”
        </a>{" "}
        and it's written by{" "}
        <a
          href="https://www.youtube.com/channel/UCgRtag7c4icCymC95QC1NHQ"
          target="_blank"
        >
          Loop & Pixel
        </a>
        .
      </>
    ),
  },
  {
    q: "I copied games and boxarts through FTP and my boxarts are still big.",
    a: "Since version 1.0.12, the auto-resize script only works if you copy the games through USB. You have to go to Tools-Resize boxarts and press A.",
  },
];
