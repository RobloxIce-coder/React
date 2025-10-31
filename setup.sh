# Copyright © Foltyz - 2025.
# This is random toilet banner for React.js
# This file is under maintenance :)

if ["$(lsb_release -si)" == "Ubuntu"]; then
   if ! dpkg -s toilet &> /dev/null; then
       echo -ne "\033[95m[*] Installing the requirements...\033[0m"
       yes | sudo apt-get install toilet
       yes | sudo apt-get install dialog
       yes | sudo apt-get install cmatrix
       echo -ne "\033[95m[*] Done!\033[0m"
       chmod +x react.sh
       sleep 1
       ./react.sh
       exit 1
    fi
else
    if ! which toilet &> /dev/null; then
       echo -ne "\033[95m[*] Installing the requirements...\033[0m"
       yes | apt install toilet
       echo -ne "\033[95m[*] Done!\033[0m"
       chmod +x react.sh
       sleep 1
       ./react.sh
       exit 1
    fi
fi
