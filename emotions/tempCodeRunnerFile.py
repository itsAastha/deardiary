from transformers import RobertaTokenizerFast, TFRobertaForSequenceClassification, pipeline

# tokenizer = RobertaTokenizerFast.from_pretrained("arpanghoshal/EmoRoBERTa")
# model = TFRobertaForSequenceClassification.from_pretrained("arpanghoshal/EmoRoBERTa")

# emotion = pipeline('sentiment-analysis', 
#                     model='arpanghoshal/EmoRoBERTa')

# emotion_labels = emotion("Today marked the end of my 30-day journey towards becoming a better programmer. It was a day of reflection and gratitude. Looking back, I realized how far I've come and how much I've grown. Throughout this journey, there were good days and bad days, challenges and accomplishments. My daily goals varied, but they all served a purpose in my development. I embraced new technologies, tackled complex problems, and sought support from friends when needed. Some days I met my goals, while others I fell short, but every experience taught me valuable lessons. Today, I took a moment to appreciate the progress made and express gratitude for the support and opportunities that came my way. To celebrate this milestone, I treated myself to a scoop of ice cream, savoring the sweet taste of achievement.")
# print(emotion_labels)
