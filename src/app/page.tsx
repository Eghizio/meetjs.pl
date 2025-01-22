import { AboutSection } from '@/components/AboutSection';
import { Stats } from '@/components/Stats';

import { JoinUs } from '@/components/JoinUs';
import { FeaturedEvents } from '@/components/FeaturedEvents';
import { HeroSection } from '@/components/HeroSection';
import { PartnersSection } from '@/components/PartnersSection';

export const dynamic = 'force-dynamic';

const Home = () => {
	return (
		<>
			<HeroSection />
			<main className="flex min-h-screen flex-col items-center">
				<JoinUs />
				<FeaturedEvents />
				<div className="w-full">
					<AboutSection />
					<Stats />
				</div>
				<PartnersSection />
			</main>
		</>
	);
};

export default Home;
