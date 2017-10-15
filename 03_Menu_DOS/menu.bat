
@echo off
:start
cls
title Shortcuts
color 2
echo.
echo   ____________________________________
echo.
echo    1. Uninstall a program
echo    2. Open control panel
echo    3. Open network control panel
echo    4. Google Search
echo    5. Open My computer
echo    9. Close                       
echo  _____________________________________
echo.
echo Enter your choice:
echo.

set /p choice=
 
if %choice%==1 (
start appwiz.cpl
)
if %choice%==2 (
start control
)
if %choice%==3 (
start ncpa.cpl 
)
if %choice%==4 (
start http://www.google.com 
)
if %choice%==5 (
start explorer.exe
)
if %choice%==9 (
cls
CMD.EXE
)  
 
goto start: