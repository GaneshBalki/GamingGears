package com.demo.gaminggears.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Assembly")
public class Assembly {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "unitid")
    private int unitid;

    @ManyToOne
    @JoinColumn(name = "expid")
    private Expert expid;

    @OneToOne
    @JoinColumn(name = "ram_proid")
    private Product ram;

    @OneToOne
    @JoinColumn(name = "ssd_proid")
    private Product ssd;

    @OneToOne
    @JoinColumn(name = "cpu_proid")
    private Product cpu;

    @OneToOne
    @JoinColumn(name = "processor_proid")
    private Product processor;

    @OneToOne
    @JoinColumn(name = "cpucooler_proid")
    private Product cpucooler;

    @OneToOne
    @JoinColumn(name = "mouse_proid")
    private Product mouse;

    @OneToOne
    @JoinColumn(name = "motherboard_proid")
    private Product motherboard;

    @OneToOne
    @JoinColumn(name = "gpu_proid")
    private Product gpu;

    // Constructors
    public Assembly() {
    }

    public Assembly(int unitid, Expert expid, Product ram, Product ssd, Product cpu, Product processor,
                     Product cpucooler, Product mouse, Product motherboard, Product gpu) {
        this.unitid = unitid;
        this.expid = expid;
        this.ram = ram;
        this.ssd = ssd;
        this.cpu = cpu;
        this.processor = processor;
        this.cpucooler = cpucooler;
        this.mouse = mouse;
        this.motherboard = motherboard;
        this.gpu = gpu;
    }

    // Getters and Setters...
    

    @Override
    public String toString() {
        return "BuildUnit{" +
                "unitid=" + unitid +
                ", expid=" + expid +
                ", ram=" + ram +
                ", ssd=" + ssd +
                ", cpu=" + cpu +
                ", processor=" + processor +
                ", cpucooler=" + cpucooler +
                ", mouse=" + mouse +
                ", motherboard=" + motherboard +
                ", gpu=" + gpu +
                '}';
    }

	public int getUnitid() {
		return unitid;
	}

	public void setUnitid(int unitid) {
		this.unitid = unitid;
	}

	public Expert getExpid() {
		return expid;
	}

	public void setExpid(Expert expid) {
		this.expid = expid;
	}

	public Product getRam() {
		return ram;
	}

	public void setRam(Product ram) {
		this.ram = ram;
	}

	public Product getSsd() {
		return ssd;
	}

	public void setSsd(Product ssd) {
		this.ssd = ssd;
	}

	public Product getCpu() {
		return cpu;
	}

	public void setCpu(Product cpu) {
		this.cpu = cpu;
	}

	public Product getProcessor() {
		return processor;
	}

	public void setProcessor(Product processor) {
		this.processor = processor;
	}

	public Product getCpucooler() {
		return cpucooler;
	}

	public void setCpucooler(Product cpucooler) {
		this.cpucooler = cpucooler;
	}

	public Product getMouse() {
		return mouse;
	}

	public void setMouse(Product mouse) {
		this.mouse = mouse;
	}

	public Product getMotherboard() {
		return motherboard;
	}

	public void setMotherboard(Product motherboard) {
		this.motherboard = motherboard;
	}

	public Product getGpu() {
		return gpu;
	}

	public void setGpu(Product gpu) {
		this.gpu = gpu;
	}
}