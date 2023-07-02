# from transformers import pipeline

# def analyze_emotion(text):
#     classifier = pipeline("zero-shot-classification", model="arpanghoshal/EmoRoBERTa", device=0)
#     candidate_labels = ["Happiness", "Anger", "Sadness", "Excitement", "Stress", "Satisfaction", "Calmness", "Admiration", "Gratitude"]
#     result = classifier(text, candidate_labels)

#     labels = result['labels']
#     scores = result['scores']

#     emotions = dict(zip(labels, scores))
#     return emotions

# def display_results(emotions):
#     print("Emotion Percentage Share:")
#     for emotion, percentage in emotions.items():
#         print(f"{emotion}: {percentage * 100:.2f}%")

# # text = ["Today was a day of focus and accomplishment. My daily goal was to optimize an algorithm for better time complexity. I approached college classes with a determined mindset, actively participating and absorbing new knowledge. In the evening, I dedicated my time to analyzing and improving the algorithm. Through careful analysis, experimentation, and research, I managed to find a more efficient approach. The sense of accomplishment and progress filled me with joy and satisfaction. To celebrate, I took a leisurely walk and treated myself to a scoop of delicious ice cream. Today reminded me of the rewards that come from continuous learning and improvement.","Today was a day filled with distractions and setbacks. My daily goal was to solve a complex coding problem using recursion. However, unexpected personal obligations and external distractions made it difficult to maintain focus. Despite my best efforts, I couldn't make significant progress on the problem. Feeling a bit discouraged, I took a moment to regroup and remind myself that setbacks are part of the learning process. In the evening, I went for a walk to clear my mind and gain a fresh perspective. Although I didn't meet my goal today, I remained hopeful for better days ahead. To lift my spirits, I indulged in a scoop of comforting ice cream. Today taught me the importance of resilience and the need to embrace challenges as opportunities for growth.","Today marked the end of my 30-day journey towards becoming a better programmer. It was a day of reflection and gratitude. Looking back, I realized how far I've come and how much I've grown. Throughout this journey, there were good days and bad days, challenges and accomplishments. My daily goals varied, but they all served a purpose in my development. I embraced new technologies, tackled complex problems, and sought support from friends when needed. Some days I met my goals, while others I fell short, but every experience taught me valuable lessons. Today, I took a moment to appreciate the progress made and express gratitude for the support and opportunities that came my way. To celebrate this milestone, I treated myself to a scoop of ice cream, savoring the sweet taste of achievement."]

# text = ["I am very happy and excited", "I am angry and sad", "I need to sleep"]

# final_plots = {}
# candidate_labels = ["Happiness", "Anger", "Sadness", "Excitement", "Stress", "Satisfaction", "Calmness", "Admiration", "Gratitude"]
# emo = []
# for t in text:
#     emotions = analyze_emotion(t)
#     emo.append(emotions)
#     display_results(emotions)
# for j in candidate_labels:
#         final_plots[j] = []
# for i in emo:
#      for j in candidate_labels:
#           final_plots[j].append(i[j])

# import matplotlib.pyplot as plt

# for i in final_plots:
#      plt.plot(["Day 1", "Day 2", "Day 3"], final_plots[i])
#      plt.xlabel('Day')
#      plt.ylabel('Emotion Share')
#      plt.title('Emotions throughout the week')
#      plt.grid(True)
# plt.legend(list(final_plots.keys()))
# plt.show()


import requests

API_URL = "https://api-inference.huggingface.co/models/arpanghoshal/EmoRoBERTa"
API_TOKEN = "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"
headers = {"Authorization": f"Bearer {API_TOKEN}"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()
	
output = query({
	"inputs": "I like you. I love you",
})

label_mapping = {
    'love': 'Happiness',
    'admiration': 'Admiration',
    'joy': 'Happiness',
    'approval': 'Satisfaction',
    'caring': 'Happiness',
    'excitement': 'Excitement',
    'amusement': 'Happiness',
    'gratitude': 'Gratitude',
    'desire': 'Happiness',
    'anger': 'Anger',
    'optimism': 'Happiness',
    'disapproval': 'Anger',
    'grief': 'Sadness',
    'annoyance': 'Anger',
    'pride': 'Admiration',
    'curiosity': 'Happiness',
    'neutral': 'Calmness',
    'disgust': 'Anger',
    'disappointment': 'Sadness',
    'realization': 'Happiness',
    'fear': 'Stress',
    'relief': 'Satisfaction',
    'confusion': 'Calmness',
    'remorse': 'Sadness',
    'embarrassment': 'Calmness',
    'surprise': 'Excitement',
    'sadness': 'Sadness',
    'nervousness': 'Stress'
}

# Merge the labels and assign scores
merged_labels = []
for label in labels:
    merged_label, score = label_mapping[label['label']]
    score += label['score']
    label_mapping[label['label']] = (merged_label, score)

# Extract the merged labels with their scores
merged_labels_with_scores = [(merged_label, score) for merged_label, score in label_mapping.values()]

# Sort the merged labels based on scores (descending order)
merged_labels_with_scores.sort(key=lambda x: x[1], reverse=True)

# Extract the merged labels without scores
merged_labels = [merged_label for merged_label, _ in merged_labels_with_scores]

# Print the merged labels with scores
for merged_label, score in merged_labels_with_scores:
    print(f'{merged_label}: {score}')

# Print the merged labels without scores
print(merged_labels)
