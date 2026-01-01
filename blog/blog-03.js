// Blog post 02

window.BLOG_POSTS = window.BLOG_POSTS || [];

window.BLOG_POSTS.push({
	id: "blog-03",
	title: "Advance FortiGate Cluster Deployment on Azure",
	date: "2025-01-11",
	summary:
		"This series provides a clear, practical walkthrough of deploying an Active-Passive NVA cluster on Microsoft Azure, addressing common misconceptions about how cloud-based firewall clusters differ from traditional physical deployments. I explained the official Fortinet reference architecture, licensing options, and the correct Azure Marketplace template to use, emphasizing why certain HA designs should be avoided. The session dives into Azure-specific networking concepts such as VNets, subnet segmentation, availability zones, and public IP behavior during failover, highlighting how FortiGate HA is adapted to Azure’s software-defined networking model. By the end of the video, viewers gain a solid architectural foundation and configuration roadmap, setting the stage for hands-on testing and workload validation in the next part of the series.",
	coverImage: "assets/blog/2025-01-010-FortiCluster01.jpg",
	coverAlt: "HA Fortigate Firewall on Azure",
	articleUrl:
		"https://youtu.be/xoQ-nguTUeI"
});
