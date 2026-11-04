
import type { Product } from "@/types/product";

// Development demo data only.
// Verify all specifications before public release.

export const products: Product[] = [
  {
    id: "product-001",
    slug: "gr-a06-industrial-robotic-arm",
    name: "Industrial Robotic Arm",
    model: "GR-A06",
    category: "robotic-arms",
    shortDescription:
      "A versatile six-axis robotic platform for precision handling and machine tending.",
    description:
      "The GR-A06 is an illustrative industrial robotics product concept designed for flexible manufacturing workflows, precision handling and automated production environments.",
    applications: [
      "Machine Tending",
      "Pick and Place",
      "Assembly",
      "Material Handling",
    ],
    highlights: [
      "Six-axis robotic architecture",
      "Flexible installation options",
      "Precision motion control",
      "Integration-ready design",
    ],
    specifications: [
      { label: "Robot Type", value: "6-Axis Industrial Robot" },
      { label: "Payload", value: "6 kg (Example)" },
      { label: "Reach", value: "900 mm (Example)" },
      { label: "Repeatability", value: "±0.03 mm (Example)" },
      { label: "Mounting", value: "Floor / Table" },
    ],
    featured: true,
    visual: "robot-arm",
  },
  {
    id: "product-002",
    slug: "gr-c12-collaborative-robot",
    name: "Collaborative Robot",
    model: "GR-C12",
    category: "collaborative-robots",
    shortDescription:
      "A flexible collaborative robotics concept for adaptable production environments.",
    description:
      "The GR-C12 represents a collaborative robotic platform concept for applications requiring flexible automation and integration into changing production workflows.",
    applications: [
      "Collaborative Assembly",
      "Machine Loading",
      "Packaging",
      "Quality Inspection",
    ],
    highlights: [
      "Collaborative application concept",
      "Flexible deployment",
      "Compact system architecture",
      "Versatile integration",
    ],
    specifications: [
      { label: "Robot Type", value: "Collaborative Robot" },
      { label: "Payload", value: "12 kg (Example)" },
      { label: "Reach", value: "1,300 mm (Example)" },
      { label: "Repeatability", value: "±0.05 mm (Example)" },
      { label: "Axes", value: "6" },
    ],
    featured: true,
    visual: "collaborative-robot",
  },
  {
    id: "product-003",
    slug: "gr-amr500-autonomous-mobile-robot",
    name: "Autonomous Mobile Robot",
    model: "GR-AMR500",
    category: "mobile-robots",
    shortDescription:
      "An autonomous mobile platform concept for intelligent intralogistics.",
    description:
      "The GR-AMR500 is an illustrative autonomous mobile robot concept for material transportation and warehouse automation.",
    applications: [
      "Warehouse Logistics",
      "Material Transportation",
      "Production Logistics",
      "Smart Warehousing",
    ],
    highlights: [
      "Autonomous navigation concept",
      "Flexible material transportation",
      "Warehouse workflow integration",
      "Scalable deployment",
    ],
    specifications: [
      { label: "Robot Type", value: "Autonomous Mobile Robot" },
      { label: "Payload", value: "500 kg (Example)" },
      { label: "Navigation", value: "SLAM (Example)" },
      { label: "Drive System", value: "Differential Drive" },
      { label: "Application", value: "Indoor Logistics" },
    ],
    featured: true,
    visual: "mobile-robot",
  },
  {
    id: "product-004",
    slug: "gr-vision-pro-machine-vision",
    name: "Machine Vision System",
    model: "GR-VISION",
    category: "machine-vision",
    shortDescription:
      "An industrial vision system concept for automated inspection and identification.",
    description:
      "The GR-VISION represents an industrial machine vision solution concept for inspection, object recognition and automated quality control.",
    applications: [
      "Visual Inspection",
      "Defect Detection",
      "Object Recognition",
      "Production Quality Control",
    ],
    highlights: [
      "Industrial inspection workflows",
      "Flexible camera configuration",
      "Image-based quality analysis",
      "Automation system integration",
    ],
    specifications: [
      { label: "System Type", value: "Machine Vision" },
      { label: "Resolution", value: "5 MP (Example)" },
      { label: "Interface", value: "GigE (Example)" },
      { label: "Inspection", value: "Visual Quality Control" },
      { label: "Integration", value: "Industrial Systems" },
    ],
    featured: false,
    visual: "machine-vision",
  },
  {
    id: "product-005",
    slug: "gr-flexcell-automation-system",
    name: "Flexible Automation Cell",
    model: "GR-FLEXCELL",
    category: "automation-cells",
    shortDescription:
      "A modular automation cell concept for integrated manufacturing operations.",
    description:
      "The GR-FLEXCELL represents a configurable industrial automation solution combining robotic equipment, process integration and production workflows.",
    applications: [
      "Automated Assembly",
      "Production Lines",
      "Material Handling",
      "Industrial Processing",
    ],
    highlights: [
      "Modular system architecture",
      "Customizable configurations",
      "Integrated automation workflows",
      "Production-oriented design",
    ],
    specifications: [
      { label: "System Type", value: "Integrated Automation Cell" },
      { label: "Configuration", value: "Modular" },
      { label: "Robot Integration", value: "Configurable" },
      { label: "Safety", value: "Application-dependent" },
      { label: "Deployment", value: "Custom Integration" },
    ],
    featured: true,
    visual: "automation-cell",
  },
];
