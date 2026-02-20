import Container from "@/components/Container";
import ProjectShowcase from "@/components/content/ProjectShowcase";
import HomepageBackground from "@/components/backgrounds/HomepageBackground";

export default function LAIRresearchPage() {
  return (
    <Container>
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-0">
        {/* <HomepageBackground /> */}
        <ProjectShowcase
          eyebrow="Classification of High-Energy Particle Precipitation Events Using Computer Vision"
          title="Undergraduate Research"
          description={
            <>
              During my research with the LAIR Lab at the University of Colorado Boulder, I developed a pipeline to analyze satellite data of energetic particle precipitation. ELFIN satellite data was converted into standardized time–energy plots, where different precipitation mechanisms produce distinctive visual signatures (e.g., “blobs” or "wave-curl" structures).
              <br /><br />
              I built software to efficiently generate these plots at scale, constructed a labeled dataset of events, and trained custom YOLOv8 computer vision models to classify precipitation sources. The trained models were then applied across more than six years of multidimensional satellite observations to automatically identify candidate events. This work enabled large-scale analysis of space weather activity and was presented at the National Conference for Undergraduate Research.
            </>
          }         
          tags={["Python", "Machine Learning", "Computer Vision", "YOLOv8", "Pytorch", "HPC Clusters", "Distributed Training", "SLURM", "Time-Series Analysis"]}
          pdf="/projects/LAIRresearch/Caleb_Bettcher_NCUR_Presentation.pdf"
          links={[
            { label: "GitHub", href: "https://github.com/CBetch/LAIR_ELFIN" },
            { label: "Summary", href: "/projects/LAIRresearch/Caleb_Bettcher_Project_Summary.pdf" },
            { label: "Presentation", href: "/projects/LAIRresearch/Caleb_Bettcher_NCUR_Presentation.pdf" },
            { label: "Abstract", href: "/projects/LAIRresearch/Caleb_Bettcher_NCUR_Abstract.pdf" },
          ]}
        />
      </div>
    </Container>
  )
}