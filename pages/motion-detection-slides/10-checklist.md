# Technical Deliverables Checklist

## Algorithm & Core Engineering
- [ ] Cascaded motion detection engine implemented (CPU-only, compressed stream analysis)
- [ ] Motion vector segmentation and clustering logic complete
- [ ] Scene-adaptive logic (semantic segmentation) operational
- [ ] Ignore zones and stationary motion filtering implemented
- [ ] Depth normalization for small/far objects
- [ ] Self-supervised learning for adaptation (if required)
- [ ] Multi-threaded processing for parallel camera streams

## Configuration & UX
- [ ] ROI and Stationary ROI auto-learning
- [ ] Sensitivity and scene presets configurable via UI
- [ ] Pre/Post Alarm recording buffer settings
- [ ] Configuration stored in XML and reflected in event logs
- [ ] Smart Client and Arcules portal integration
- [ ] Feedback loop from pilot users established

## Benchmarking & Validation
- [ ] Benchmarking suite for recall, precision, AUC, false positive rate, CPU usage
- [ ] Import and catalog datasets (I-Lids, NGD, MP4, annotated ground truth)
- [ ] Event-based validation (true/false positives, automated comparison)
- [ ] Real-time progress tracking and drill-down visualization
- [ ] Export results (PDF, CSV, raw data)
- [ ] Robustness and scalability tests (lighting, weather, occlusion, density)

## Integration
- [ ] Arcules cloud analytics configuration (rule-based alarms, Smart Search, API integration)
- [ ] XProtect plugin architecture (C# and C++), device-activated integration
- [ ] Sequence Explorer support for event playback/search
- [ ] Event sync reliability between Arcules and XProtect

## Performance Optimization
- [ ] FFmpeg optimized for all supported video streams (H.264, H.265, AV1, with/without B-frames)
- [ ] CPU utilization profiling and tuning for entry-level and high-end hardware
- [ ] Throughput and latency benchmarks for 50–500 camera scenarios

## Documentation & Compliance
- [ ] Technical documentation: algorithm design, configuration, integration, benchmarking, troubleshooting
- [ ] Release notes for each version
- [ ] SBOM (Software Bill of Materials) generated for every release (SPDX/CycloneDX)
- [ ] Vulnerability and license compliance checks for all dependencies
- [ ] Dataset documentation: metadata, source, purpose, bias checks, version control
- [ ] Audit trail for all compliance activities
- [ ] Legal review for office dataset completed or compliance plan documented

## Project Management
- [ ] Jira epics and user stories created and tracked for all deliverables
- [ ] Sprint completion and stakeholder sign-off for each release phase

## Outstanding Items
- [ ] Final dataset requirements from Peter documented or plan in place
- [ ] Office dataset legal review completed
