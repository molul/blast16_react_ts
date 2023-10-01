/*
Q. I added a lot of ROMs and the screen is blinking. What’s happening?

A. You added too many ROMs. While you can add around 1000 ROMs more or less, it’s strongly recommended that you only add those games you truly want to play, and use the favourites list to have a smaller list of those games. Less games results in smoother performace and better game browsing.

Blast16 is not meant to hold all Mega Drive/32X/Sega CD/Master System/Game Gear games, but to help people create a Mega Drive mini out of a Raspberry Pi, and like any mini console, it’s designed to have just the right amount of games.

Q. Will you make separate game menus per console?

A. No. Blast16 is conceptually a way to turn your Raspberry Pi into a Mega Drive Mini. The other systems are just a bonus. Since version 1.0.9, games are sorted by system and then alphabetically, and by pressing Down you can move to the next system’s first game.

Q. Can background music be changed?

A. No. 

Q. How do I update with a new image?

A. You have to flash the image like the first one you downloaded and installed. However, that’s a pity because you’ll erase all your games, boxarts, settings, saved states… So you better do a “backup and restore”. Follow these steps:

1- Connect an USB drive to your Raspberry.
2- In Blast16, go to Options-Tools-Backup and press A, then confirm. Wait for the backup to finish.
3- Connect the USB drive to your computer to make sure the backup was made (there should be a directory named “blast16_backup”).
4- Turn your Raspberry Pi off. 
5- Extract the microSD and flash the new image.
6- Insert the microSD and boot the Raspberry.
7- Connect the USB drive again.
8- Go to Options-Tools-Restore system and press A, then confirm. Wait for the restore to be finished.
 
All your games, boxarts, etc should be there again.
Q. Can I change other Retroarch options that are not visible in the frontend?

A. Yes, by going to Options-Tools-Open Retroarch. But bear in mind that any change in Retroarch that is not doable from the frontend is not supported.

Q. My gamepad is detected but some buttons are not.
A. Blast16 is compatible with Direct-Input (D-Input) controllers only, so you need to check if your controller has this connection mode. For instance, Retroflag Mega Drive controllers are set as D-input by pressing “Y” before connecting to the USB port (you only need to do that once), and 8bitdo usually turn on on D-input mode by pressing B+Start.

Q. Can I enable WiFi?

A. Yes, by going to Options-Tools-Command line. Connect a keyboard to the Pi, type “sudo raspi-config” and press Enter. Then go to Network and then WiFi and enter your network’s name and password.

Q. Will you support Retroarchievements?

A. Not in the current roadmap.

Q. My bluetooth controller doesn’t connect after flashing the latest version.

A. When you flash a new image, all bluetooth controllers are forgotten. You have to pair them like the first time. However, if you already paired them and put them on pairing mode again, they can become unrecognizable by the Pi (not sure why). In those cases, please follow these steps:

Connect your controller by USB to the Raspberry.
Go to options, settings, input.
Go to “Reset Bluetooth cache” and press A.
Turn the raspberry pi off.
Disconnect your controller.
Turn the Raspberry pi on.
When you see Blast16 logo, you can turn the controller on (remember to do it in D-input mode) and hold the pairing button until it’s on pairing mode.
Q. Can I use a keyboard?
A. Blast16 can be controlled with a keyboard, but for playing games you’ll need a controller.

Q. What’s the name of the background music and who wrote it?

A. It’s called “The management song” (https://www.youtube.com/watch?v=APVrb9lugqQ) and it’s written by Loop & Pixel (https://www.youtube.com/channel/UCgRtag7c4icCymC95QC1NHQ).

Q. I copied games and boxarts through FTP and my boxarts are still big.
A. Since version 1.0.12, the auto-resize script only works if you copy the games through USB. You have to go to Tools-Resize boxarts and press A. */
