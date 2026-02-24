import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";

export default function CalebBettcherDotComPage() {
  return (
    <AnimatedNeuralNetBackground 
        center={{ x: 0.5, y: 0.5 }} 
        containRadius={1000} 
        opacity={1}
        node_count={200}
    />
);
}