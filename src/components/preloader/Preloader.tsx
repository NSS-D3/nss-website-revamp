import { useEffect, useState } from 'react';
import styles from './preloader.module.scss';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading assets...');
  const [isComplete, setIsComplete] = useState(false);

  // Critical assets to preload for the landing page
  const criticalAssets = [
    // Logo images
    '/logo/logo.svg',
    '/logo/logo.png',
    
    // Flower images
    '/flower/pink.svg',
    '/flower/purple.svg',
    '/flower/green.svg',
    '/flower/orange.svg',
    '/flower/yellow.svg',
    
    // About section image (external)
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
  ];

  const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`);
        resolve(); // Continue even if image fails to load
      };
      img.src = src;
    });
  };

  const loadAllAssets = async () => {
    const totalAssets = criticalAssets.length;
    let loadedAssets = 0;

    // Load each asset and update progress
    const loadPromises = criticalAssets.map(async (asset) => {
      try {
        await preloadImage(asset);
      } catch (error) {
        console.warn(`Failed to load asset: ${asset}`, error);
      } finally {
        loadedAssets++;
        const progressPercent = Math.round((loadedAssets / totalAssets) * 100);
        setProgress(progressPercent);
        
        // Update loading text based on progress
        if (progressPercent < 30) {
          setLoadingText('Loading logos...');
        } else if (progressPercent < 70) {
          setLoadingText('Loading flower assets...');
        } else if (progressPercent < 90) {
          setLoadingText('Loading images...');
        } else {
          setLoadingText('Almost ready...');
        }
      }
    });

    // Wait for all assets to load
    await Promise.all(loadPromises);
    
    // Add a small delay for smooth transition
    setTimeout(() => {
      setLoadingText('Ready!');
      setIsComplete(true);
      
      // Complete the preload after animation
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 200);
  };

  useEffect(() => {
    loadAllAssets();
  }, []);

  return (
    <div className={`${styles.preloader} ${isComplete ? styles.complete : ''}`}>
      <div className={styles.content}>
        {/* NSS Logo */}
        <div className={styles.logoContainer}>
          <img
            src="/logo/logo.svg"
            alt="NSS Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>NSS BITS Pilani</h1>
          <p className={styles.subtitle}>"Not Me, But You"</p>
        </div>

        {/* Loading Progress */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className={styles.loadingText}>{loadingText}</p>
          <p className={styles.percentage}>{progress}%</p>
        </div>

        {/* Animated Elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.circle} />
          <div className={styles.circle} />
          <div className={styles.circle} />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
