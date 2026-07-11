---
permalink: /
title: ""
excerpt: ""
author_profile: true
toc: true
toc_label: "Contents"
toc_links:
  - title: "About Me"
    url: "#about-me"
  - title: "News"
    url: "#-news"
  - title: "Publications"
    url: "#-publications"
    children:
      - title: "🤖 Models & Training"
        url: "#models-training"
      - title: "📊 Benchmarks & Evaluation"
        url: "#benchmarks-evaluation"
      - title: "🗃️ Datasets & Open Source"
        url: "#datasets-open-source"
      - title: "💡 Theory & Generalization"
        url: "#theory-generalization"
      - title: "📚 Surveys & Perspectives"
        url: "#surveys-perspectives"
  - title: "Work Experience"
    url: "#-work-experience"
  - title: "Education"
    url: "#-education"
  - title: "Honors and Awards"
    url: "#-honors-and-awards"
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# 👨‍🎓 About Me

<span class='anchor' id='about-me'></span>

I am a third-year Ph.D. student at Peking University, advised by Prof. [Xuejun Yang](https://www.semanticscholar.org/author/Xuejun-Yang/1780156) and Prof. [Wenjing Yang](https://www.semanticscholar.org/author/Wenjing-Yang/2120811655). I earned my B.E. degree at China University of Geosciences in 2023. Prior to that, I served for two years in the People’s Liberation Army.

My primary research interest focus on **Foundation Models for Multimodal Learning**. I am also interested in **Causal Inference** and **Reinforcement Learning**. My overarching research goal is to build reliable and generalizable multimodal intelligence, with a focus on developing principled methods that integrate vision, language, and structured reasoning under real-world conditions.

Currently I am working on **Efficient Pre-training of Multimodal Large Language Models**.

*I am actively seeking research discussions and collaboration opportunities, so feel free to contact me (frankyang1517@gmail.com)!* 😄


# ✨ News
- [2026.07] &nbsp;🎉 Two papers are accepted by **ACM MM 2026**.
- [2026.06] &nbsp;🎉 Two papers are accepted by **ECCV 2026**.
- [2026.05] &nbsp;🎉 Six papers are accepted by **ICML 2026**.
- [2026.04] &nbsp;🎉 One paper is accepted by **ACL 2026**.
- [2026.02] &nbsp;🎉 Four papers are accepted by **CVPR 2026**, including one **Highlight**.
- [2026.01] &nbsp;🎉 Six papers are accepted by **ICLR 2026**.
- [2025.11] &nbsp;🎉 One paper is accepted by **AAAI 2026**.
- [2025.09] &nbsp;🎉 One paper is accepted by **NeurIPS 2025**.
- [2025.07] &nbsp;🎉 Two papers are accepted by **ACM MM 2025**.
- [2025.05] &nbsp;🎉 One paper is accepted by **ICML 2025**.
- [2025.02] &nbsp;🚀 I join the **Kling Team** at Kuaishou Technology as a research intern.

# 📝 Publications 

<span style="font-size: 90%;">*\* Equal Contribution, † Corresponding Author, ‡ Project Leader, # Core Contributor*</span>

<!-- - [KeyFrame-GenEval]()<br><span style="font-size: 80%;">*Yuqi Tang, **Yang Shi‡***</span> -->

<span class="publication-anchor" id="models-training"></span>
**🤖 Models & Training**

- [DOPD: Dual On-policy Distillation](https://arxiv.org/abs/2606.30626)<br><span style="font-size: 80%;">*Xinlei Yu, Gen Li, Qingyi Si, Guibin Zhang, Yuqi Xu, Congcong Wang, Shuai Dong, Kaiwen Tuo, Xiangyu Zeng, Kaituo Feng, Qunzhong Wang, **Yang Shi**, Xiaobin Hu, Xiangyu Yue, Jiaqi Wang, Shuicheng Yan*</span>
- [LatentOmni: Rethinking Omni-Modal Understanding via Unified Audio-Visual Latent Reasoning](https://arxiv.org/abs/2605.22012)<br><span style="font-size: 80%;">*Yifan Dai, Zhenhua Wu, Bohan Zeng, Daili Hua, Jialing Liu, Bozhou Li, Yuran Wang, Chengzhuo Tong, Hao Liang, Xiaochen Ma, Junbo Niu, Tianyu Guo, **Yang Shi**, Yue Ding, Yiyan Ji, Bingyin Mei, Yushuo Guan, Yuanxing Zhang, Pengfei Wan, Fangcheng Fu, Wentao Zhang*</span>
- [Beyond the Last Layer: Multi-Layer Representation Fusion for Visual Tokenization](https://arxiv.org/abs/2605.10780)<br><span style="font-size: 80%;">*Xuanyu Zhu\*, Yan Bai\*, **Yang Shi‡**, Yihang Lou, Yuanxing Zhang, Jing Jin, Yuan Zhou†*</span>
- [OmniSIFT: Modality-Asymmetric Token Compression for Efficient Omni-modal Large Language Models](https://arxiv.org/abs/2602.04804) [**ICML 2026**]<br><span style="font-size: 80%;">*Yue Ding, Yiyan Ji, Jungang Li, Xuyang Liu, Xinlong Chen, Junfei Wu, Bozhou Li, Bohan Zeng, **Yang Shi**, Yushuo Guan, Yuanxing Zhang, Jiaheng Liu, Qiang Liu, Pengfei Wan, Liang Wang*</span>
- [DiaDem: Advancing Dialogue Descriptions in Audiovisual Video Captioning for Multimodal Large Language Models](https://arxiv.org/abs/2601.19267) [**ECCV 2026**]<br><span style="font-size: 80%;">*Xinlong Chen, Weihong Lin, Jingyun Hua, Linli Yao, Yue Ding, Bozhou Li, Bohan Zeng, **Yang Shi**, Qiang Liu, Yuanxing Zhang, Pengfei Wan, Liang Wang, Tieniu Tan*</span>
- [CoF-T2I: Video Models as Pure Visual Reasoners for Text-to-Image Generation](https://arxiv.org/abs/2601.10061) [**ICML 2026**]<br><span style="font-size: 80%;">*Chengzhuo Tong, Mingkun Chang, Shenglong Zhang, Yuran Wang, Cheng Liang, Zhizheng Zhao, Ruichuan An, Bohan Zeng, **Yang Shi**, Yifan Dai, Ziming Zhao, Guanbin Li, Pengfei Wan, Yuanxing Zhang, Wentao Zhang*</span>
- [GRAN-TED: Generating Robust, Aligned, and Nuanced Text Embedding for Diffusion Models](https://arxiv.org/abs/2512.15560) [**ECCV 2026**]<br><span style="font-size: 80%;">*Bozhou Li, Sihan Yang, Yushuo Guan, Ruichuan An, Xinlong Chen, **Yang Shi**, Pengfei Wan, Wentao Zhang, Yuanxing zhang*</span>
- [Hybrid Attribution Priors for Explainable and Robust Model Training](https://arxiv.org/abs/2512.14719)<br><span style="font-size: 80%;">*Zhuoran Zhang, Feng Zhang, Shangyuan Li, **Yang Shi**, Yuanxing Zhang, Wei Chen, Tengjiao Wang, Kam-Fai Wong*</span>
- [Scone: Bridging Composition and Distinction in Subject-Driven Image Generation via Unified Understanding-Generation Modeling](https://arxiv.org/abs/2512.12675) [**CVPR 2026 Highlight**]<br><span style="font-size: 80%;">*Yuran Wang\*, Bohan Zeng\*, Chengzhuo Tong, Wenxuan Liu, **Yang Shi**, Xiaochen Ma, Hao Liang, Yuanxing Zhang, Wentao Zhang†*</span>
- [Monet: Reasoning in Latent Visual Space Beyond Images and Language](https://arxiv.org/abs/2511.21395) [**CVPR 2026**]<br><span style="font-size: 80%;">*Qixun Wang, **Yang Shi**, Yifei Wang, Yuanxing Zhang, Pengfei Wan, Kun Gai, Xianghua Ying†, Yisen Wang†*</span>
- [AVoCaDO: An Audiovisual Video Captioner Driven by Temporal Orchestration](https://arxiv.org/abs/2510.10395) [**ICLR 2026**]<br><span style="font-size: 80%;">*Xinlong Chen, Yue Ding, Weihong Lin, Jingyun Hua, Linli Yao, **Yang Shi**, Bozhou Li, Yuanxing Zhang, Qiang Liu†, Pengfei Wan, Liang Wang, Tieniu Tan*</span>
- [BaseReward: A Strong Baseline for Multimodal Reward Model](https://arxiv.org/abs/2509.16127) [**ICLR 2026**]<br><span style="font-size: 80%;">*Yi-Fan Zhang\*, Haihua Yang\*‡, Huanyu Zhang, **Yang Shi**, Zezhou Chen, Haochen Tian, Chaoyou Fu†, Kai Wu, Bo Cui, Xu Wang, Jianfei Pan, Haotian Wang, Zhang Zhang†, Liang Wang*</span>
- [VersaVid-R1: A Versatile Video Understanding and Reasoning Model from Question Answering to Captioning Tasks](https://arxiv.org/abs/2506.09079?) [**ICLR 2026**]<br><span style="font-size: 80%;">*Xinlong Chen, Yuanxing Zhang, Yushuo Guan, Bohan Zeng, **Yang Shi**, Sihan Yang, Pengfei Wan, Qiang Liu†, Liang Wang, Tieniu Tan*</span>
- [Mavors: Multi-granularity Video Representation for Multimodal Large Language Model](https://mavors-mllm.github.io/) [**ACM MM 2025**]<br><span style="font-size: 80%;">***Yang Shi**\*, Jiaheng Liu\*, Yushuo Guan\*, Zhenhua Wu, Yuanxing Zhang†, Zihao Wang, Weihong Lin, Jingyun Hua, Zekun Wang, Xinlong Chen, Bohan Zeng, Wentao Zhang, Fuzheng Zhang, Wenjing Yang, Di Zhang*</span>
- [MM-RLHF: The Next Step Forward in Multimodal LLM Alignment](https://arxiv.org/abs/2502.10391) [**ICML 2025**]<br><span style="font-size: 80%;">*Yi-Fan Zhang‡, Tao Yu, Haochen Tian, Chaoyou Fu†, Peiyan Li, Jianshu Zeng, Wulin Xie, **Yang Shi**, Huanyu Zhang, Junkang Wu, Xue Wang, Yibo Hu, Bin Wen†, Fan Yang, Zhang Zhang†, Tingting Gao, Di Zhang, Liang Wang, Rong Jin, Tieniu Tan*</span>
- [Debiasing Multimodal Large Language Models via Penalization of Language Priors](https://arxiv.org/abs/2403.05262) [**ACM MM 2025**]<br><span style="font-size: 80%;">*Yi-Fan Zhang\*, **Yang Shi\***, Weichen Yu, Qingsong Wen†, Xue Wang, Wenjing Yang, Zhang Zhang, Liang Wang, Rong Jin*</span>

<span class="publication-anchor" id="benchmarks-evaluation"></span>
**📊 Benchmarks & Evaluation**

- [CapRiCorn-1K: A Comprehensive Benchmark for Video Captioning and Subject Referential Consistency Across Temporal Scales](https://arxiv.org/abs/2606.21949)<br><span style="font-size: 80%;">*Xinlong Chen, Jiafu Tang, Yue Ding, Yizhuo Jia, Bozhou Li, Bohan Zeng, **Yang Shi**, Shihao Li, Yiyan Ji, Qiang Liu, Weihong Lin, Yuanxing Zhang, Pengfei Wan, Liang Wang, Tieniu Tan*</span>
- [LongAV-Compass: Towards Unified Evaluation of Minute-Scale Audio-Visual Generation Across T2AV, I2AV, and V2AV](https://arxiv.org/abs/2605.26244)<br><span style="font-size: 80%;">*Tengfei Liu, **Yang Shi†**, Xuanyu Zhu, Jiafu Tang, Liu Yang, Qixun Wang, Zhuoran Zhang, Yuqi Tang, Fengxiang Wang, Yuhao Dong, Xinlong Chen, Bozhou Li, Bohan Zeng, Yue Ding, Xiaohan Zhang, Jialu Chen, Haotian Wang†, Yuanxing Zhang‡, Pengfei Wan, Leye Wang†*</span>
- [MSAVBench: Towards Comprehensive and Reliable Evaluation of Multi-Shot Audio-Video Generation](https://arxiv.org/abs/2605.20183)<br><span style="font-size: 80%;">*Yujie Wei, Yujin Han, Zhekai Chen, Yongming Li, Kaixun Jiang, Zhihang Liu, Quanhao Li, Zhiwu Qing, Xiang Wang, Zhen Xing, Ruihang Chu, Lingyi Hong, Yefei He, Junjie Zhou, Junqiu Yu, **Yang Shi**, Difan Zou, Kai Zhu, Shiwei Zhang, Yingya Zhang, Yu Liu, Xihui Liu, Hongming Shan*</span>
- [Artifact-Bench: Evaluating MLLMs on Detecting and Assessing the Artifacts of AI-Generated Videos](https://arxiv.org/abs/2605.18984)<br><span style="font-size: 80%;">*Yuqi Tang\*, **Yang Shi\*‡**, Zhuoran Zhang\*, Qixun Wang\*, Xuehai Bai, Yue Ding, Ruizhe Chen, Bohan Zeng, Xinlong Chen, Xuanyu Zhu, Bozhou Li, Yuran Wang, Yifan Dai, Chengzhuo Tong, Xinyu Liu, Yiyan Ji, Yujie Wei, Yuhao Dong, Shilin Yan, Fengxiang Wang, Yi-Fan Zhang†, Haotian Wang†, Yuanxing Zhang†, Pengfei Wan*</span>
- [Edit-Compass & EditReward-Compass: A Unified Benchmark for Image Editing and Reward Modeling](https://arxiv.org/abs/2605.13062)<br><span style="font-size: 80%;">*Xuehai Bai\*, **Yang Shi\***, YiFan Zhang\*‡, Xuanyu Zhu, Yuran Wang, Yifan Dai, Xinyu Liu, Yiyan Ji, Xiaoling Gu†, Yuanxing Zhang†*</span>
- [Video-MME-v2: Towards the Next Stage in Benchmarks for Comprehensive Video Understanding](https://arxiv.org/abs/2604.05015)<br><span style="font-size: 80%;">*Video-MME Team (Acknowledgement: **Yang Shi**)*</span>
- [Agentic-MME: What Agentic Capability Really Brings to Multimodal Intelligence?](https://arxiv.org/abs/2604.03016)<br><span style="font-size: 80%;">*Qianshan Wei, Yishan Yang, Siyi Wang, Jinglin Chen, Binyu Wang, Jiaming Wang, Shuang Chen, Zechen Li, **Yang Shi**, Yuqi Tang, Weining Wang, Yi Yu, Chaoyou Fu, Qi Li, Yi-Fan Zhang*</span>
- [VTC-Bench: Evaluating Agentic Multimodal Models via Compositional Visual Tool Chaining](https://arxiv.org/abs/2603.15030)<br><span style="font-size: 80%;">*Xuanyu Zhu, Yuhao Dong, Rundong Wang, **Yang Shi**, Zhipeng Wu, Yinlun Peng, Yi-Fan Zhang, Yihang Lou, Yuanxing Zhang, Ziwei Liu, Yan Bai, Yuan Zhou*</span>
- [BrowseComp-V^3: A Visual, Vertical, and Verifiable Benchmark for Multimodal Browsing Agents](https://arxiv.org/abs/2602.12876)<br><span style="font-size: 80%;">*Huanyao Zhang, Jiepeng Zhou, Bo Li, Bowen Zhou, Yanzhe Dan, Haishan Lu, Zhiyong Cao, Jiaoyang Chen, Yuqian Han, Zinan Sheng, Zhengwei Tao, Hao Liang, Jialong Wu, **Yang Shi**, Yuanpeng He, Jiaye Lin, Qintong Zhang, Guochen Yan, Runhao Zhao, Zhengpin Li, Xiaohan Yu, Lang Mei, Chong Chen, Wentao Zhang, Bin Cui*</span>
- [MorphoBench: A Benchmark with Difficulty Adaptive to Model Reasoning](https://www.arxiv.org/abs/2510.14265) [**ACL 2026**]<br><span style="font-size: 80%;">*Xukai Wang\*, Xuanbo Liu\*, Mingrui Chen\*, Haitian Zhong\*, Xuanlin Yang\*, Bohan Zeng\*, Jinbo Hu\*, Hao Liang, Junbo Niu, Xuchen Li, Ruitao Wu, Ruichuan An, **Yang Shi**, Liu Liu, Xu-Yao Zhang, Qiang Liu, Zhouchen Lin, Wentao Zhang†, Bin Dong†*</span>
- [RealUnify: Do Unified Models Truly Benefit from Unification? A Comprehensive Benchmark](https://arxiv.org/abs/2509.24897) [**CVPR 2026**]<br><span style="font-size: 80%;">***Yang Shi#**, Yuhao Dong#‡, Yue Ding#, Yuran Wang#, Xuanyu Zhu#, Sheng Zhou#, Wenting Liu#, Haochen Tian#, Rundong Wang#, Huanqian Wang, Zuyan Liu, Bohan Zeng, Ruizhe Chen, Qixun Wang, Zhuoran Zhang, Xinlong Chen, Chengzhuo Tong, Bozhou Li, Chaoyou Fu, Qiang Liu, Haotian Wang†, Wenjing Yang, Yuanxing Zhang†, Pengfei Wan, Yi-Fan Zhang†, Ziwei Liu†*</span>
- [MME-VideoOCR: Evaluating OCR-Based Capabilities of Multimodal LLMs in Video Scenarios](https://mme-videoocr.github.io/) [**NeurIPS 2025**]<br><span style="font-size: 80%;">***Yang Shi#**, Huanqian Wang#, Wulin Xie#, Huanyao Zhang#, Lijie Zhao#, Yi-Fan Zhang#†, Xinfeng Li, Chaoyou Fu, Zhuoer Wen, Wenting Liu, Zhuoran Zhang, Xinlong Chen, Bohan Zeng, Sihan Yang, Yuanxing Zhang‡, Pengfei Wan, Haotian Wang†, Wenjing Yang†*</span>
- [MME-Unify: A Comprehensive Benchmark for Unified Multimodal Understanding and Generation Models](https://arxiv.org/abs/2504.03641) [**ICLR 2026**]<br><span style="font-size: 80%;">*Wulin Xie\*, Yi-Fan Zhang\*‡, Chaoyou Fu, **Yang Shi**, Bingyan Nie, Hongkai Chen, Zhang Zhang, Liang Wang, Tieniu Tan*</span>
- [EmbodiedEval: Evaluate Multimodal LLMs as Embodied Agents](https://arxiv.org/abs/2501.11858v1) [**CVPR 2026 Workshop**]<br><span style="font-size: 80%;">*Zhili Cheng‡, Yuge Tu\#, Ran Li\#, Shiqi Dai\#, Jinyi Hu\#‡, Shengding Hu, Jiahao Li, **Yang Shi**, Tianyu Yu, Weize Chen, Lei Shi, Maosong Sun†*</span>

<span class="publication-anchor" id="datasets-open-source"></span>
**🗃️ Datasets & Open Source**

- [OpenWorldLib: A Unified Codebase and Definition of Advanced World Models](https://arxiv.org/abs/2604.04707)<br><span style="font-size: 80%;">*DataFlow Team (Contributor: **Yang Shi**)*</span>
- [OpenGPT-4o-Image: A Comprehensive Dataset for Advanced Image Generation and Editing](https://arxiv.org/abs/2509.24900) [**ICML 2026**]<br><span style="font-size: 80%;">*Zhihong Chen\*, Xuehai Bai\*, **Yang Shi\***, Chaoyou Fu, Huanyu Zhang, Haotian Wang, Xiaoyan Sun, Zhang Zhang, Liang Wang, Yuanxing Zhang†, Pengfei Wan, Yi-Fan Zhang†‡*</span>

<span class="publication-anchor" id="theory-generalization"></span>
**💡 Theory & Generalization**

- [The Unseen Bias: How Norm Discrepancy in Pre-Norm MLLMs Leads to Visual Information Loss](https://arxiv.org/abs/2512.08374) [**ICLR 2026**]<br><span style="font-size: 80%;">*Bozhou Li, Xinda Xue, Sihan Yang, **Yang Shi**, Xinlong Chen, Yushuo Guan, Yuanxing Zhang, Wentao Zhang*</span>
- [Detecting Unobserved Confounders: A Kernelized Regression Approach](https://arxiv.org/abs/2601.00200) [**AAAI 2026**]<br><span style="font-size: 80%;">*Yikai Chen, Yunxin Mao, Hao Zou, Chunyuan Zheng, Shanzhi Gu, Haotian Wang, Shixuan Liu, **Yang Shi**, Kun Kuang, Wenjing Yang*</span>
- [When Modalities Conflict: How Unimodal Reasoning Uncertainty Governs Preference Dynamics in MLLMs](https://arxiv.org/abs/2511.02243) [**ICML 2026**]<br><span style="font-size: 80%;">*Zhuoran Zhang, Tengyue Wang, Xilin Gong, **Yang Shi**, Haotian Wang, Di Wang, Lijie Hu*</span>
- [Transformers with Endogenous In-Context Learning: Bias Characterization and Mitigation](https://openreview.net/forum?id=guKWBA2HWf) [**ICLR 2026**]<br><span style="font-size: 80%;">*Haotian Wang, Haoxuan Li, Hao Zou, Haoang Chi, **Yang Shi**, Yuanxing Zhang, Wenjing Yang, Xinwang Liu, Zhouchen Lin*</span>
- [Identifying Outcome-Oriented Root Causes via Cross Regression](https://openreview.net/forum?id=MG5UFZ2Fa2)<br><span style="font-size: 80%;">*Haotian Wang, Hao Zou, Haoxuan Li, **Yang Shi**, Yuanxing Zhang, Kun Kuang, Wenjing Yang, Xinwang Liu, Peng Cui*</span>
- [Beyond Rational Illusion: Behaviorally Realistic Strategic Classification](https://openreview.net/forum?id=OziO3CZHxh) [**ICML 2026**]<br><span style="font-size: 80%;">*Xinpeng Lv, Haotian Wang, Renzhe Xu, Yunxin Mao, **Yang Shi**, Siyang Gao, Xinwang Liu, Wenjing Yang*</span>
- [A Unified and Data-Efficient Framework for Out-of-Distribution and Generalization](https://openreview.net/forum?id=b5K7k80gHU)<br><span style="font-size: 80%;">*Zhaohui Hu, Hongli Xiao, Yonglin Li, Chuan Li, **Yang Shi**, Mengzhu Wang, Haotian Wang, Long Lan*</span>

<span class="publication-anchor" id="surveys-perspectives"></span>
**📚 Surveys & Perspectives**

- [Research on World Models Is Not Merely Injecting World Knowledge into Specific Tasks](https://arxiv.org/abs/2602.01630)<br><span style="font-size: 80%;">*Bohan Zeng, Kaixin Zhu, Daili Hua, Bozhou Li, Chengzhuo Tong, Yuran Wang, Xinyi Huang, Yifan Dai, Zixiang Zhang, Yifan Yang, Zhou Liu, Hao Liang, Xiaochen Ma, Ruichuan An, Tianyi Bai, Hongcheng Gao, Junbo Niu, **Yang Shi**, Xinlong Chen, Yue Ding, Minglei Shi, Kai Zeng, Yiwen Tang, Yuanxing Zhang, Pengfei Wan, Xintao Wang, Wentao Zhang*</span>
- [Towards Efficient Multimodal Large Language Models: A Survey on Token Compression](https://www.techrxiv.org/doi/full/10.36227/techrxiv.176823010.07236701/v1)<br><span style="font-size: 80%;">*Linli Yao\*, Long Xing\*, **Yang Shi\***, Sida Li, Yuanxin Liu, Yuhao Dong, Yi-Fan Zhang, Lei Li, Qingxiu Dong, Xiaoyi Dong, Qidong Huang, Haotian Wang, Feng Wu, Yuanxing Zhang, Pengfei Wan, Zhouchen Lin†, Xu Sun†*</span>
- [A Survey of Unified Multimodal Understanding and Generation: Advances and Challenges](https://www.techrxiv.org/users/993777/articles/1355509-a-survey-of-unified-multimodal-understanding-and-generation-advances-and-challenges)<br><span style="font-size: 80%;">*Yan Yang\*, Haochen Tian\*, **Yang Shi\***, Wulin Xie\*, Yi-Fan Zhang†, Yuhao Dong, Yibo Hu, Liang Wang, Ran He, Caifeng Shan, Chaoyou Fu†, Tieniu Tan*</span>

# 👨‍💻 Work Experience
- Research Intern at *Kling AI*, **Kuaishou Technology**, 2025.02 - Present
  - In collaboration with Dr. [Yuanxing Zhang](https://longo11070001.github.io/)
- Visiting Student at *THUNLP*, **Tsinghua University**, 2023.11 - 2025.02
  - In collaboration with Prof. [Zhiyuan Liu](https://scholar.google.com/citations?user=dT0v5u0AAAAJ&hl=en)
- Visiting Student at *Intelligent Game and Decision Lab*, **Academy of Military Sciences**, 2023.09 - Present
  - In collaboration with Prof. [Shixuan Liu](https://shixuanliu-andy.github.io/)
- Visiting Student at *State Key Laboratory of High Performance Computing*, **National University of Defense Technology**, 2023.09 - Present
  - In collaboration with Prof. [Haotian Wang](https://accwht.github.io/) and Prof. [Haoang Chi](https://www.semanticscholar.org/author/Haoang-Chi/2047998054)

# 📖 Education
- **Ph.D.** School of Computer Science, **Peking University**, 2023 - Present
- **B.E.** School of Computer Science, **China University of Geosciences**, 2019 - 2023

# 🎖 Honors and Awards
- Ruiming Alumni Scholarship, **1‰** , 2021
- China National Scholarship, **0.2%** , 2020
- Outstanding Soldier Award, 2019
- Outstanding Soldier Award, 2018
