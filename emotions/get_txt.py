"""Function for fetching the .txt files and return a dictionary with date and text."""

import datetime
import dateutil.parser as parser

def fetch(file_name: str) -> dict[str, str]:
    """Fetch function that returns dict with formatted dictionary."""
    file_dir = "./Diary_uploads/" + file_name
    with open(file_dir, 'r', encoding="utf-8") as file:
        text = file.read()
    with open(file_dir, 'r', encoding="utf-8") as file:
        first_line = file.readline()


    # IF first line is a date return date and text, if not, error, pass.
    try:
        date = parser.parse(first_line)
        return {
            "Date": date.strftime("%Y-%m-%d"),
            "Text": text
            }
    except:
        return {
            "Date": datetime.datetime.now().strftime("%Y-%m-%d %H:%M"),
            "Text": text}