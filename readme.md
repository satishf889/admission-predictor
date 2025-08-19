# 🎓 Graduation Admission Predictor

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/)

A **web application** that predicts the admission chances of Indian students applying to foreign universities using a **Linear Learner ML model**. Built with **Bootstrap 5**, **Lottie animations**, and optionally integrated with a **Flask backend**.

---

## 🚀 Features

- Predict admission chances using **GRE, TOEFL, University Rating, SOP+LOR, GPA, Research Experience**.
- Fully **responsive Bootstrap 5 design** with mobile-friendly stacked form fields.
- **Lottie animations** change dynamically based on prediction results.
- **Predict button disables** after result is shown to avoid duplicate submissions.
- Modal form resets automatically when closed.

---

## 📊 Dataset

The dataset contains parameters important for Masters program admissions:

| Feature           | Description                 |
| ----------------- | --------------------------- |
| GRE               | Score out of 340            |
| TOEFL             | Score out of 120            |
| University Rating | 1 to 5                      |
| SOP + LOR         | Strength rating from 1 to 5 |
| GPA               | Undergraduate GPA (0-10)    |
| Research          | 0 = No, 1 = Yes             |
| Chance of Admit   | Target variable (0 to 1)    |

Dataset link: \[https://www.kaggle.com/mohansacharya/graduate-admissions]

---

## 💻 Demo

- Click **Test Model** on the navbar or home page to open the modal.
- Enter the required fields and click **Predict Admission**.
- See the prediction result with dynamic animation.

<!-- ![Screenshot](screenshot.png) *(Add your app screenshot here)* -->

---

## 🛠 Technology Stack

- **Front-end:** HTML, Bootstrap 5, JavaScript, Lottie animations
- **Back-end (optional):** Python Flask for connecting a real ML model
- **ML Model:** Linear Learner

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/satishf889/admission-predictor.git
cd admission-predictor
```

2. (Optional) Set up Flask backend:

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python Server/app.py
```

3. Open `index.html` in your browser (works fully without Flask for demo).

---

## 📌 Notes

- This project is for **demo and learning purposes only**.
- Predictions **do not guarantee admission**.

---

## 📬 Contact

**Satish Fulwani**
Email: [satish.fulwani63@gmail.com](mailto:satish.fulwani63@gmaial.com)
