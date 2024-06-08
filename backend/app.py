# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def getVolunteeringRecommendations():
#   return "hello"

from genai import GenAI
from jigsawstack import JigsawStack
from dotenv import load_dotenv
from os import getenv

def main():
  load_dotenv()
  GOOGLE_GENAI_KEY = getenv("GOOGLE_GENAI_KEY")
  JIGSAWSTACK_SECRET_KEY = getenv("JIGSAWSTACK_SECRET_KEY")

  genAI = GenAI(GOOGLE_GENAI_KEY)
  jigsawStack = JigsawStack(JIGSAWSTACK_SECRET_KEY)

  location = input("Location: ")
  keyword = input("Keyword: ")
  opportunities = jigsawStack.scrapeVolunteeringOpportunities(location, keyword)
  
  suggestions = genAI.getVolunteeringSuggestions(opportunities)
  return suggestions

if __name__ == "__main__":
  print(main())