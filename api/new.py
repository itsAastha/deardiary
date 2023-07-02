from transformers import pipeline

def generate_recommendations(entry):
    """Generates recommendations using Hugging Face Transformers based on the diary entry."""
    generator = pipeline("text-generation", model="EleutherAI/gpt-neo-2.7B")
    prompt = f"Diary Entry: {entry}\nRecommendation:"
    response = generator(prompt, max_length=100, do_sample=True, temperature=0.7)

    recommendations = response[0]["generated_text"].strip().split("Recommendation:")[1].strip()
    return recommendations

# Diary entries
diary_entries = [
    "Today was a great day! I went for a long hike in the mountains and enjoyed the beautiful scenery.",
    "Feeling a bit stressed out today. Work has been overwhelming lately and I can't seem to relax.",
    "Spent the afternoon working on a new painting. It was so fulfilling and helped me clear my mind.",
]

# Generate recommendations for each diary entry
recommendations = []
for i, entry in enumerate(diary_entries):
    entry_recommendations = generate_recommendations(entry)
    recommendations.append(entry_recommendations)

# Print the recommendations
for i, entry_recommendations in enumerate(recommendations):
    print(f"Recommendations for Diary Entry {i+1}:")
    if entry_recommendations:
        print(entry_recommendations)
    else:
        print("No recommendations.")
    print()
