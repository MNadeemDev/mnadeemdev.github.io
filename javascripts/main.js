(() => {
  const translations = {
    'Skip to content': '본문으로 건너뛰기',
    'AI RESEARCH ENGINEER · SEOUL, SOUTH KOREA': 'AI 연구 엔지니어 · 서울, 대한민국',
    'LLM/VLM, Computer Vision & Edge AI': 'LLM/VLM, 컴퓨터 비전 및 엣지 AI',
    'AI Research Engineer, Spilab · M.S. Computer Science & Engineering, Sejong University': 'Spilab AI 연구 엔지니어 · 세종대학교 컴퓨터공학 석사',
    'Language': '언어',
    'About': '소개',
    'Skills': '기술 역량',
    'Projects': '프로젝트',
    'Publications': '논문',
    'Experience': '경력',
    'Education': '학력',
    'First-author papers': '제1저자 논문',
    'RAG knowledge chunks': 'RAG 지식 청크',
    'nuScenes planning L2': 'nuScenes 계획 L2',
    'About Me': '소개',
    'AI Research Engineer working on': '저는',
    'LLM/VLM and vision models': 'LLM/VLM 및 비전 모델',
    'end to end — agentic RAG, lightweight fine-tuning with Hugging Face PEFT (LoRA/QLoRA), and inference optimization via quantization, ONNX, TensorRT, OpenVINO, and vLLM/Ollama for constrained GPUs and edge devices.': '을 연구부터 배포까지 수행하는 AI 연구 엔지니어입니다. 에이전틱 RAG, Hugging Face PEFT(LoRA/QLoRA)를 활용한 경량 파인튜닝, 그리고 제한된 GPU 및 엣지 장치를 위한 양자화·ONNX·TensorRT·OpenVINO·vLLM/Ollama 기반 추론 최적화에 집중합니다.',
    'I am currently an AI Research Engineer at': '현재',
    'in Seoul. I hold an M.S. in Computer Science and Engineering from Sejong University\'s CVPR Lab and have published 13 papers, including work at WACV 2026 and ACPR 2025.': '에서 AI 연구 엔지니어로 근무하고 있습니다. 세종대학교 CVPR Lab에서 컴퓨터공학 석사 학위를 받았으며, WACV 2026과 ACPR 2025를 포함해 13편의 논문을 발표했습니다.',
    'Technical Skills': '기술 역량',
    'Fine-Tuning': '파인튜닝',
    'RAG & Retrieval': 'RAG 및 검색',
    'Inference Optimization': '추론 최적화',
    'Serving & APIs': '서빙 및 API',
    'Object Detection': '객체 탐지',
    'Segmentation': '분할',
    'Tracking & Pose': '추적 및 포즈 추정',
    'Generative AI': '생성형 AI',
    'Model Training': '모델 학습',
    'GPU & Edge Hardware': 'GPU 및 엣지 하드웨어',
    'Time-Series': '시계열',
    'Languages & Tools': '언어 및 도구',
    'An on-premise Korean assistant for equipment traceability and root-cause analysis in semiconductor manufacturing.': '반도체 제조 환경에서 설비 이력 추적과 근본 원인 분석을 지원하는 온프레미스 한국어 어시스턴트입니다.',
    'Built over 12,890 equipment records and a 314-page MES manual.': '12,890건의 설비 기록과 314쪽 MES 매뉴얼을 기반으로 구축했습니다.',
    'Fused dense, Korean-bigram BM25, and knowledge-graph retrieval with cited answers.': '밀집 검색, 한국어 바이그램 BM25, 지식 그래프 검색을 결합하고 근거 인용 답변을 제공했습니다.',
    'Made manual screenshots retrievable through Qwen2.5-VL captioning; adapted and served models with LoRA/QLoRA, Ollama, and GGUF.': 'Qwen2.5-VL 캡셔닝으로 매뉴얼 스크린샷을 검색 가능하게 만들고, LoRA/QLoRA·Ollama·GGUF로 모델을 도메인 적응 및 서빙했습니다.',
    'A CLIP-style dual encoder for fire and smoke recognition across electro-optical and thermal-IR imagery.': '전기광학 및 열적외선 영상 전반에서 화재와 연기를 인식하는 CLIP 스타일 듀얼 인코더입니다.',
    'Add new target classes with text prompts rather than retraining.': '재학습 대신 텍스트 프롬프트로 새로운 대상 클래스를 추가합니다.',
    'Engineered cross-spectral registration, temporal synchronization, and density-based geolocation.': '교차 스펙트럼 정합, 시간 동기화, 밀도 기반 위치 추정을 구현했습니다.',
    'Prepared for Jetson edge inference and IoT data networking.': 'Jetson 엣지 추론과 IoT 데이터 네트워킹을 위해 준비했습니다.',
    'A six-camera trajectory planner that pairs a Transformer decoder with differentiable physical objectives and hard-constraint filtering.': 'Transformer 디코더를 미분 가능한 물리 목적함수 및 하드 제약 필터링과 결합한 6개 카메라 궤적 플래너입니다.',
    'Reduced nuScenes planning L2 from': 'nuScenes planning L2를',
    '1.902 to 0.246': '1.902에서 0.246으로',
    'over four iterations.': '4회 반복에 걸쳐 개선했습니다.',
    'Corrected temporal data leakage by adopting official nuScenes splits.': '공식 nuScenes 분할을 적용해 시간적 데이터 누수를 수정했습니다.',
    'Used FP16 autocast and a FLOPs budget for on-vehicle latency; related first-author work was accepted at WACV 2026.': '차량 내 지연 시간 요구사항을 위해 FP16 autocast와 FLOPs 예산을 적용했으며, 관련 제1저자 논문은 WACV 2026에 채택되었습니다.',
    'A privacy-preserving edge monitoring system that combines worker pose tracking with multi-sensor risk assessment.': '작업자 포즈 추적과 다중 센서 위험 평가를 결합한 개인정보 보호형 엣지 모니터링 시스템입니다.',
    'Detects falls from 17-keypoint poses in live RTSP video.': '실시간 RTSP 영상에서 17개 키포인트 포즈로 낙상을 감지합니다.',
    'Records auditable de-identification and safety-alert events.': '감사가 가능한 비식별화 및 안전 경보 이벤트를 기록합니다.',
    'Fuses vision with a five-gas sensor array; benchmarked edge latency on an Intel N100.': '비전 신호와 5종 가스 센서 배열을 융합하고 Intel N100에서 엣지 지연 시간을 벤치마크했습니다.',
    'An aerial helmet-compliance detector for construction sites and ski resorts where labelled drone imagery is scarce.': '라벨링된 드론 영상이 부족한 건설 현장과 스키 리조트를 위한 항공 안전모 준수 탐지기입니다.',
    'Generated image-conditioned synthetic training data with FLUX.2 [dev] while retaining subject identity and visual style.': '피사체 정체성과 시각적 스타일을 유지하는 FLUX.2 [dev] 기반 이미지 조건부 합성 학습 데이터를 생성했습니다.',
    'Varied backgrounds, weather, and poses to create 1024 × 1024 aerial scenes representing approximately 10 m flight altitude.': '약 10 m 비행 고도를 나타내는 1024 × 1024 항공 장면을 위해 배경, 날씨, 포즈를 다양화했습니다.',
    'Used bfloat16 and model CPU offload to augment a real YOLO-format dataset on consumer-grade GPUs.': '소비자급 GPU에서 bfloat16과 모델 CPU 오프로드를 사용해 실제 YOLO 형식 데이터셋을 증강했습니다.',
    'Reliable live-video inference pipelines for IP cameras and drones, built for operational detection and multi-object tracking.': '운영 환경의 탐지 및 다중 객체 추적을 위해 구축한 IP 카메라와 드론용 신뢰도 높은 실시간 영상 추론 파이프라인입니다.',
    'Implemented RTSP decoding, frame sampling, and automatic reconnection for live CCTV and drone feeds.': '실시간 CCTV 및 드론 피드를 위한 RTSP 디코딩, 프레임 샘플링, 자동 재연결을 구현했습니다.',
    'Delivered debris, sea-waste, fire/smoke, and people detection with YOLO and Deep SORT tracking.': 'YOLO와 Deep SORT 추적으로 잔해, 해양 쓰레기, 화재/연기, 사람 탐지를 제공했습니다.',
    'Optimized small-object detection with TensorRT and exposed models through FastAPI operator dashboards.': 'TensorRT로 소형 객체 탐지를 최적화하고 FastAPI 운영자 대시보드로 모델을 제공했습니다.',
    'An efficient deep-learning model for fire detection and classification in IoT environments.': 'IoT 환경의 화재 탐지 및 분류를 위한 효율적인 딥러닝 모델입니다.',
    'Designed a lightweight CNN that balances accuracy, parameter count, and inference cost for edge deployment.': '엣지 배포를 위해 정확도, 파라미터 수, 추론 비용의 균형을 맞춘 경량 CNN을 설계했습니다.',
    'Applied model-compression principles to support resource-constrained IoT monitoring.': '제한된 자원 환경의 IoT 모니터링을 지원하기 위해 모델 압축 원칙을 적용했습니다.',
    'Published in': '논문을',
    '(Q1, IF 7.0); related work received the ICNGC 2023 Best Paper Award.': '에 게재했으며(Q1, IF 7.0), 관련 연구는 ICNGC 2023 최우수 논문상을 수상했습니다.',
    'A lightweight image classifier that distinguishes authentic from forged QR codes for mobile counterfeit verification.': '모바일 위조품 검증을 위해 진짜 QR 코드와 위조 QR 코드를 구분하는 경량 이미지 분류기입니다.',
    'Applied transfer learning to a MobileNet classifier for QR-code forgery detection.': 'QR 코드 위조 탐지를 위해 MobileNet 분류기에 전이 학습을 적용했습니다.',
    'Selected a low-parameter architecture to support phone-based verification instead of server-only inference.': '서버 전용 추론 대신 휴대폰 기반 검증을 지원하도록 저파라미터 아키텍처를 선택했습니다.',
    'Tuned the accuracy–model-size trade-off for resource-constrained deployment.': '자원 제약 배포를 위해 정확도와 모델 크기 간의 균형을 조정했습니다.',
    'A low-cost vision system that converts instance masks into physical pumpkin-length measurements for field phenotyping.': '인스턴스 마스크를 포장 표현형 분석용 실제 호박 길이 측정값으로 변환하는 저비용 비전 시스템입니다.',
    'Segmented individual pumpkins with Mask R-CNN under occlusion and varied viewpoints.': '가림과 다양한 시점 조건에서 Mask R-CNN으로 개별 호박을 분할했습니다.',
    'Automated a measurement workflow previously performed manually in the field.': '현장에서 수동으로 수행하던 측정 워크플로를 자동화했습니다.',
    'Published as VPBR in': 'VPBR 논문을',
    ', a Q1 journal (IF 4.5).': '에 게재했습니다(Q1, IF 4.5).',
    '13 publications; five as first author. Full list on': '총 13편의 논문 중 5편은 제1저자입니다. 전체 목록은',
    'Experience': '경력',
    'AI Research Engineer': 'AI 연구 엔지니어',
    '· Spilab, Seoul': '· Spilab, 서울',
    'Developing LLM/VLM, RAG, and computer-vision systems; fine-tuning local models, optimizing inference, and deploying real-time services across NVIDIA GPUs and edge devices.': 'LLM/VLM, RAG, 컴퓨터 비전 시스템을 개발하며, 로컬 모델 파인튜닝, 추론 최적화, NVIDIA GPU 및 엣지 장치 전반의 실시간 서비스 배포를 수행합니다.',
    'Graduate Researcher': '대학원 연구원',
    '· CVPR Lab, Sejong University': '· 세종대학교 CVPR Lab',
    'Researched efficient vision models for fire detection, medical imaging, plant phenotyping, and QR-code forgery detection; produced five peer-reviewed publications.': '화재 탐지, 의료 영상, 식물 표현형 분석, QR 코드 위조 탐지를 위한 효율적 비전 모델을 연구했고, 동료 심사 논문 5편을 발표했습니다.',
    'Software Engineer': '소프트웨어 엔지니어',
    '· Systems Junction, Lahore': '· Systems Junction, 라호르',
    'Built Android applications and image-processing workflows optimized for mobile performance and memory constraints.': '모바일 성능 및 메모리 제약에 최적화된 Android 애플리케이션과 이미지 처리 워크플로를 구축했습니다.',
    'Education & Recognition': '학력 및 수상',
    'Computer Science and Engineering': '컴퓨터공학',
    '· Sejong University, Seoul': '· 세종대학교, 서울',
    'GPA: 4.25/4.5 · Thesis:': 'GPA: 4.25/4.5 · 석사 논문:',
    'Computer Science': '컴퓨터과학',
    '· The Islamia University of Bahawalpur, Pakistan': '· 이슬라미아 대학교 바하왈푸르, 파키스탄',
    'Recognition': '수상 및 장학',
    'Best Paper Award': '최우수 논문상',
    '· ICNGC 2023': '· ICNGC 2023',
    'Full Tuition Fee Waiver, Sejong University': '세종대학교 전액 장학금',
    'Academic Service': '학술 활동',
    'Journal reviewer:': '학술지 심사:',
    'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), IEEE Transactions on Image Processing (TIP), and': 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), IEEE Transactions on Image Processing (TIP), 및',
    'Conference reviewer:': '학회 심사:',
    '10th International Conference on Next Generation Computing and 40th ITC-CSCC.': '제10회 International Conference on Next Generation Computing 및 제40회 ITC-CSCC.',
    'AI Research Engineer · LLM/VLM · Computer Vision · Edge AI': 'AI 연구 엔지니어 · LLM/VLM · 컴퓨터 비전 · 엣지 AI',
    'Back to top ↑': '맨 위로 ↑'
  };

  const textNodes = [];
  const originals = new WeakMap();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim() || node.parentElement?.closest('script, style, button')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
    originals.set(walker.currentNode, walker.currentNode.nodeValue);
  }

  const translateText = (source, language) => {
    if (language !== 'ko') return source;
    const leading = source.match(/^\s*/)[0];
    const trailing = source.match(/\s*$/)[0];
    const phrase = source.trim();
    return translations[phrase] ? `${leading}${translations[phrase]}${trailing}` : source;
  };

  const languageButtons = document.querySelectorAll('[data-language]');
  const setLanguage = (language) => {
    const currentLanguage = language === 'ko' ? 'ko' : 'en';
    textNodes.forEach((node) => {
      node.nodeValue = translateText(originals.get(node), currentLanguage);
    });
    document.documentElement.lang = currentLanguage;
    document.title = currentLanguage === 'ko' ? '무하마드 나딤 | AI 연구 엔지니어' : 'Muhammad Nadeem | AI Research Engineer';
    document.querySelector('.profile-photo').alt = currentLanguage === 'ko' ? '무하마드 나딤' : 'Muhammad Nadeem';
    document.querySelector('.site-nav').setAttribute('aria-label', currentLanguage === 'ko' ? '주요 탐색' : 'Primary navigation');
    document.querySelector('.language-toggle').setAttribute('aria-label', currentLanguage === 'ko' ? '언어 선택' : 'Language selector');
    languageButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
    });
    try {
      localStorage.setItem('portfolio-language', currentLanguage);
    } catch (_) {
      // Local storage may be unavailable in privacy-restricted browsers.
    }
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('portfolio-language') || 'en';
  } catch (_) {
    // Default to English if storage is unavailable.
  }

  const revealItems = document.querySelectorAll('[data-reveal]');
  const navLinks = document.querySelectorAll('.site-nav a');
  const sections = [...document.querySelectorAll('main section[id]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelector('#year').textContent = new Date().getFullYear();
  setLanguage(savedLanguage);

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-30% 0px -62% 0px', threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));
})();
