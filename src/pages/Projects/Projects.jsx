import React from "react";

const projects = [
  {
    title: "Student Performance Prediction",
    image: "/student.png",
    description:
      "Built ML models to predict exam scores and cluster students by learning patterns.",
    tags: ["Python", "Pandas", "Regression", "Clustering"],
  },
  {
    title: "Spotify Genre Classification",
    image: "/spotify.jpg",
    description:
      "Predicted music genres using audio features and classification algorithms with PCA.",
    tags: ["ML", "PCA", "Classification", "Python"],
  },
  {
    title: "Digital Democracy & Religious Identity",
    image: "/vote.jpg",
    description:
      "Studied the influence of digital media on youth political identity using survey data.",
    tags: ["Politics", "Survey", "R", "Sociology"],
  },
  {
    title: "Healthcare Analytics Dashboard",
    image: "/h2.jpg",
    description:
      "Created Power BI dashboard to analyze treatment costs, billing, and service types.",
    tags: ["Power BI", "Healthcare", "Dashboards", "BI Tools"],
  },
  {
    title: "Gene Expression Prediction using Deep Learning",
    image: "/img.png",
    description:
      "Developed a PyTorch regression model to predict lacY gene expression using expression data from 45 genes, incorporating advanced EDA and feature selection.",
    tags: ["PyTorch", "Deep Learning", "EDA", "Regression", "Feature Selection"],
  },
  {
  title: "Comparative Image Classification using CNN and Vision Transformer",
  image: "/img2.png", // Add an image named cnn_vit.jpg to your public folder
  description:
    "Developed and trained CNN and Vision Transformer models on CIFAR-10 with detailed preprocessing and modular training.",
  highlights: [
    "Built custom CNN architecture with convolutional blocks, BatchNorm, Dropout, and MaxPooling.",
    "Implemented ViT-Tiny from scratch using the timm library without pretrained weights.",
    "Used consistent preprocessing: resizing, normalization, augmentation.",
    "Engineered training loop with early stopping, learning rate scheduling, and checkpointing.",
    "Compared models on accuracy, training speed, parameter size, and generalization.",
    "Visualized training/validation curves and confusion matrices for practical insights.",
  ],
  tags: ["PyTorch", "CNN", "Vision Transformer", "CIFAR-10", "Deep Learning"],
}

];

export default function Projects() {
  return (
    <section className="relative bg-[#0a0f1c] py-16 px-6 text-white min-h-screen overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2 drop-shadow-lg">
          My Works
        </h2>
        <p className="text-gray-400 text-lg">
          Let me walk you through some of my work pieces!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => {
          const isMiddle = index === 1; // second card is middle and bigger

          return (
            <div
              key={index}
              className={`relative rounded-3xl bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] border border-cyan-600/40 shadow-[0_15px_40px_-10px_rgba(34,211,238,0.4)] transform transition duration-300 ${
                isMiddle ? "scale-110 shadow-[0_25px_60px_-15px_rgba(34,211,238,0.7)] z-20" : "scale-95 hover:scale-105 hover:shadow-cyan-500/60"
              }`}
              style={{ perspective: 1000 }}
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-cyan-300 mb-2 drop-shadow-lg">
                    {proj.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs text-white bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
